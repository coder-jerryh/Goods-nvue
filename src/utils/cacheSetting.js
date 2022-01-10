// 计算缓存
export const computedCache = () => {
  return new Promise(resolve => {
    plus.cache.calculate((size) => {
      let cachSize = 0
      size = parseInt(size)
      if (size === 0) {
        cachSize = 0
      } else if (size < 1024) {
        cachSize = size + 'B'
      } else if (size < 1048576) {
        cachSize = (size / 1024).toFixed(2) + 'KB'
      } else if (size < 1073741824) {
        cachSize = (size / 1048576).toFixed(2) + 'MB'
      } else {
        cachSize = (size / 1073741824).toFixed(2) + 'GB'
      }
      resolve(cachSize)
    })
  })
}

// 清除缓存
export const clearCache = (cb) => {
  uni.showLoading({
    title: '清理中…'
  })
  const os = plus.os.name
  if (os === 'Android') {
    const main = plus.android.runtimeMainActivity()
    const sdRoot = main.getCacheDir()
    const files = plus.android.invoke(sdRoot, 'listFiles')
    const len = files.length
    for (let i = 0; i < len; i++) {
      const filePath = '' + files[i] // 没有找到合适的方法获取路径，这样写可以转成文件路径
      plus.io.resolveLocalFileSystemURL(filePath, (entry) => {
        if (entry.isDirectory) {
          entry.removeRecursively(() => { // 递归删除其下的所有文件及子目录
            uni.showToast({
              title: '缓存清理完成',
              duration: 2000
            })
            cb()
          }, (e) => {
            console.log(e.message)
          })
        } else {
          entry.remove()
        }
      }, () => {
        console.log('文件路径读取失败')
      })
    }
  } else { // ios
    plus.cache.clear(() => {
      uni.showToast({
        title: '缓存清理完成',
        duration: 2000
      })
      cb()
    })
  }
}
