var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
  return typeof t;
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function (e) {
  return void 0 === e ? "undefined" : t(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
}, o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function (t) {
  return void 0 === t ? "undefined" : e(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
}, a = getApp();
var commonTimer = null
var quickTimer = null
const numbers = [
  '888', '2020', '666', '1234', '999', '520', '6688', '77', '4321', '1995', '1314', '555', '8333', '5656', '5678', '4888', '8866', '3344', '234', '654', '000', '3000'
]
let rewardedVideoAd = null
const names = ['菁', '梦', '岚', '苑', '婕', '馨', '瑗', '琰', '乐', '佳', '涵', '晋', '逸', '沅', '海', '圣', '姬', '泰', '诗',
  '韵', '融', '园', '艺', '咏', '卿', '聪', '澜', '纯', '毓', '悦', '昭', '冰', '爽', '琬', '茗', '羽', '希', '宁',
  '欣', '飘', '育', '涵', '琴', '晴', '丽', '美', '瑶', '梦', '茜', '倩', '希', '夕', '月', '悦', '乐', '彤', '影',
  '珍', '依', '沫', '玉', '灵', '瑶', '嫣', '倩', '妍', '萱', '漩', '娅', '媛', '怡', '佩', '淇', '雨', '娜', '莹',
  '娟', '文', '芳', '莉', '雅', '芝', '文', '晨', '宇', '怡', '全', '子', '凡', '悦', '思', '奕', '亚', '宜', '可',
  '钊', '钧', '铎', '铭', '皑', '柏', '镇', '淇', '淳', '亮', '洁', '茹', '清', '吉', '克', '先', '依', '浩', '泓',
  '亮', '允', '元', '源', '渊', '和', '函', '妤', '宜', '云', '琪', '菱', '宣', '沂', '健', '信', '媛', '凯', '伊',
  '欣', '可', '洋', '萍', '荣', '榕', '含', '佑', '明', '雄', '芝', '英', '义', '卿', '乾', '亦', '雅', '芝', '烨',
  '萱', '昊', '芸', '天', '岚', '昕', '尧', '鸿', '棋', '琳', '宸', '乔', '丞', '安', '毅', '凌', '惠', '珠', '舒',
  '泉', '坤', '恒', '渝', '菁', '龄', '弘', '佩', '勋', '宁', '元', '栋', '嘉', '哲', '俊', '博', '维']
Page({
  data: {
    canUseQuick: false,
    showPopup: false,
    news: [],
    model: 1,
    commonStart: false,
    commonNum: 0,
    commonPhoneNum: 0,
    quickStart: false,
    quickNum: 0,
    quickPhoneNum: 0,
    flow_id: "",
    flow_type: 0,
    gonggao: "",
    customIndex0: [0, 0],
    onlyArray0: [[], []],
    customArray0: [],
    customIndex: [0, 0],
    onlyArray: [[], []],
    customArray: [],
    shoujika: "",
    guishudi: "",
    start_text: "开始",
    top_info: "",
    info_status: 0,
    start: !1,
    setInter: "",
    num: 0,
    jishi_status: 0,
    s_index: 0,
    is_zhixing: 1,
    zhezhaoceng: "flex",
    msgList: []
  },
  onLoad: function (t) {
    const that = this
    if (wx.createRewardedVideoAd) {
      rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'adunit-0195fb29f7a72dbd' })
      rewardedVideoAd.onLoad(() => {
        console.log('onLoad event emit')
      })
      rewardedVideoAd.onError((err) => {
        console.log('onError event emit', err)
      })
      rewardedVideoAd.onClose((res) => {
        // 用户点击了【关闭广告】按钮
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          that.setData({
            showPopup: false,
            canUseQuick: true
          })
          wx.showToast({
            type: 'success',
            title: '正在极速扫号中…',
            duration: 2000
          });
          that.startQuick()
        } else {
          wx.showToast({
            type: 'none',
            title: '取消无法享受极速扫号哦~',
            duration: 2000
          });
          // 播放中途退出，不下发游戏奖励
        }
        console.log('onClose event emit', res)
      })
    }
    getApp().onLoad(this);
    var e = this;
    var news = []
    // **豪用户扫到1*******8881靓号
    for (let i = 0; i < 8; i++) {
      news.push([
        `🔥**${names[Math.floor(Math.random() * (names.length - 0)) + 0]}用户扫到1*******${numbers[Math.floor(Math.random() * (numbers.length - 0)) + 0]}靓号🔥`,
        `🔥**${names[Math.floor(Math.random() * (names.length - 0)) + 0]}用户扫到1*******${numbers[Math.floor(Math.random() * (numbers.length - 0)) + 0]}靓号🔥`,
        `🔥**${names[Math.floor(Math.random() * (names.length - 0)) + 0]}用户扫到1*******${numbers[Math.floor(Math.random() * (numbers.length - 0)) + 0]}靓号🔥`,
        `🔥**${names[Math.floor(Math.random() * (names.length - 0)) + 0]}用户扫到1*******${numbers[Math.floor(Math.random() * (numbers.length - 0)) + 0]}靓号🔥`
      ])
    }
    e.setData({
      news
    })
    wx.showLoading({
      title: "玩命加载中..."
    }), wx.request({
      url: "https://www.lh10010.xyz/api/webinfo",
      data: {},
      header: {
        "content-type": "application/json"
      },
      success: function (t) {
        wx.hideLoading(), e.setData({
          msgList: t.data.zixunList,
          gonggao: t.data.gonggao,
          show_gonggao: "" == t.data.gonggao ? 0 : 1
        }), e.setData({
          customArray: t.data.provice
        });
        for (var o = {
          customArray: e.data.customArray,
          customIndex: e.data.customIndex,
          onlyArray: e.data.onlyArray
        }, a = 0; a < o.customArray.length; a++) o.onlyArray[0].push(o.customArray[a].region_name);
        for (n = 0; n < o.customArray[o.customIndex[0]].city.length; n++) o.onlyArray[1].push(o.customArray[o.customIndex[0]].city[n].region_name);
        e.setData(o), e.setData({
          guishudi: o.onlyArray[0][o.customIndex[0]] + "==>" + o.onlyArray[1][o.customIndex[1]]
        }), e.setData({
          customArray0: t.data.card
        });
        for (var o = {
          customArray0: e.data.customArray0,
          customIndex0: e.data.customIndex0,
          onlyArray0: e.data.onlyArray0
        }, a = 0; a < o.customArray0.length; a++) o.onlyArray0[0].push(o.customArray0[a].cards_name);
        for (var n = 0; n < o.customArray0[o.customIndex0[0]].card.length; n++) o.onlyArray0[1].push(o.customArray0[o.customIndex0[0]].card[n].card_name);
        e.setData(o), e.setData({
          shoujika: o.onlyArray0[0][o.customIndex0[0]] + "==>" + o.onlyArray0[1][o.customIndex0[1]]
        });
      }
    });
  },
  queding: function (t) {
    this.setData({
      zhezhaoceng: "none"
    });
  },
  clearPhone: function () {
    wx.showToast({
      title: "已清空"
    }), this.setData({
      screens: []
    });
  },
  copyUrl: function (t) {
    var e = "http://bk.taomau.cn/";
    wx.showModal({
      cancelText: "取消",
      confirmText: "复制",
      content: e,
      showCancel: !0,
      title: "建议收藏",
      success: function (t) {
        t.confirm ? wx.setClipboardData({
          data: e,
          success: function (t) {
            wx.getClipboardData({
              success: function (t) {
                wx.showToast({
                  title: "复制成功",
                  icon: "success"
                });
              }
            });
          }
        }) : t.cancel && console.log("用户点击取消");
      }
    });
  },
  qugoumai: function (t) {
    var e = this.data.is_xianshi, n = t.currentTarget.dataset.mobile;
    if (console.log("is_xianshi", e), 1 == e) {
      var s = t.currentTarget.dataset.province, r = t.currentTarget.dataset.city, c = t.currentTarget.dataset.goodsid, i = t.currentTarget.dataset.card_name;
      a.globalData.card_name = i, wx.navigateTo({
        url: "/pages/coriander/dingdan?province=" + s + "&city=" + r + "&mobile=" + n + "&goodsid=" + c + "&card_name=" + i + "&source=扫号界面"
      });
    } else n = JSON.stringify(n), console.log("mobile", void 0 === n ? "undefined" : o(n)),
      wx.setClipboardData({
        data: n,
        success: function (t) {
          wx.getClipboardData({
            success: function (t) {
              wx.showToast({
                title: "复制成功",
                icon: "success"
              });
            }
          });
        }
      });
  },
  changeIndex: function (t) {
    var e = this, o = (t.currentTarget.dataset.id, t.currentTarget.dataset.index);
    e.setData({
      s_index: o
    });
  },
  setTimeout: function (t) {
    function e(e) {
      return t.apply(this, arguments);
    }
    return e.toString = function () {
      return t.toString();
    }, e;
  }(function (t) {
    var e = this;
    setTimeout(function () {
      e.setData({
        info_status: 0
      });
    }, 2e3);
  }),
  startSetInter: function () {
    var t = this;
    t.data.setInter = setInterval(function () {
      var e = t.data.num + 1;
      t.setData({
        num: e
      });
    }, 1e3);
  },
  endSetInter: function () {
    var t = this;
    clearInterval(t.data.setInter), t.setData({
      jishi_status: 0,
      num: 0
    });
  },
  onUnload: function () {
    var t = this;
    clearInterval(t.data.setInter);
  },
  setting_click: function (t) {
    wx.navigateTo({
      url: "/pages/coriander/gengduoshezhi"
    });
  },
  clean_click: function (t) {
    for (var e = this, o = wx.getStorageSync("screens"), a = 0; a < o.length; a++) o[a].true_mobile = [];
    wx.setStorageSync("screens", o), e.setData({
      screens: o,
      info_status: 1,
      top_info: "全部号码清理完毕"
    }), e.setTimeout();
  },
  stop_click: function (t) {
    var e = this;
    clearInterval(commonTimer)
    clearInterval(quickTimer)
    e.setData({
      info_status: 1,
      top_info: "已停止",
      start: !1,
      is_zhixing: 0,
      commonNum: 0,
      commonPhoneNum: 0,
      quickNum: 0,
      quickPhoneNum: 0
    }), e.endSetInter(), e.setTimeout();
    if (t.currentTarget.dataset.type == 'common') {
      e.setData({
        commonStart: false
      })
    } else {
      e.setData({
        quickStart: false
      })
    }
  },
  getammeternumber: function (t, e, a, n, s, r) {
    var c = this, t = t, e = e, a = a, n = n, i = wx.getStorageSync("cache_status");
    wx.getNetworkType({
      success: function (u) {
        c.setData({
          netWorkType: u.networkType
        }), console.log("netWorkType", u.networkType);
        var l = c.data.netWorkType;
        if (1 == i) var d = 1 * wx.getStorageSync("cache_time1"), m = 1 * wx.getStorageSync("cache_time2"), y = 1 * wx.getStorageSync("cache_limit"); else var d = 3, m = 120, y = 1e3;
        console.log("递归中：cache_time1", d), console.log("递归中：cache_time2", m), console.log("递归中：cache_limit", y);
        var g = c.data.is_zhixing, h = wx.getStorageSync("screens"), f = Math.round(new Date());
        console.log("递归中：_", f), 1 == g && wx.request({
          url: "https://msgo.10010.com/NumApp/NumberCenter/qryNum?callback=jsonp_queryMoreNums&provinceCode=" + t + "&cityCode=" + e + "&monthFeeLimit=0&goodsId=" + a + "&searchCategory=3&net=01&amounts=200&codeTypeCode=&searchValue=&qryType=02&goodsNet=4&channel=msg-xsg&_=" + f,
          header: {
            "content-type": "application/json"
          },
          success: function (i) {
            console.log("ress", i);
            var u = i.data;
            if (u = u.replace(";", ""), u = u.replace("jsonp_queryMoreNums(", ""), u = u.replace(")", ""),
              "M0" == (u = JSON.parse(u)).code) {
              for (var g = [], f = 0, p = 0; p < u.numArray.length; p++) u.numArray[p] > 5 && (g[f] = u.numArray[p],
                f++);
              for (var x = 0; x < h.length; x++) {
                var v = 0, w = h[x].true_mobile;
                if (h[x].ways_qidian) {
                  console.log(111);
                  var _ = 1 * h[x].ways_qidian - 1;
                  _ < 0 && (_ = 0);
                  var A = h[x].ways_haoduan;
                  for (console.log("qidian", _, void 0 === _ ? "undefined" : o(_)), console.log("haoduan", A, void 0 === A ? "undefined" : o(A)),
                    I = 0; I < g.length; I++) {
                    var S = g[I];
                    S = String(S), console.log("mobile", S, void 0 === S ? "undefined" : o(S)), -1 != S.slice(_).search(A) && (console.log("存在"),
                      v = 1 * v + 1, console.log("符合的号码", g[I]), D = {
                        id: v,
                        province: t,
                        city: e,
                        mobile: g[I],
                        goodsid: a,
                        card_name: n
                      }, console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", w.length, y), w.length >= y && w.splice(0, 1),
                      w = w.concat(D), T = c.data.num + 1, c.setData({
                        num: T
                      }));
                  }
                } else for (var b = new RegExp("^" + h[x].ze_rule), I = 0; I < g.length; I++) if (b.test(g[I])) {
                  v = 1 * v + 1, console.log("符合的号码", g[I]);
                  var D = {
                    id: v,
                    province: t,
                    city: e,
                    mobile: g[I],
                    goodsid: a,
                    card_name: n
                  };
                  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", w.length, y), w.length >= y && w.splice(0, 1),
                    w = w.concat(D);
                  var T = c.data.num + 1;
                  c.setData({
                    num: T
                  });
                }
                h[x].true_mobile = w, wx.setStorageSync("screens", h), c.setData({
                  screens: h
                });
              }
              console.log("递归", s), console.log("@@@@@@@@@@@@screens", c.data.screens), ++s < r ? setTimeout(function () {
                c.getammeternumber(t, e, a, n, s, r);
              }, 1e3 * d) : wx.hideLoading();
            } else if ("M8" == u.code) k = "wifi" == l ? "接口已暂时频繁，可以休息一段时间继续或者重启路由器后重新开始" : "接口已暂时频繁，可以休息一段时间继续或者开关飞行模式后重新开始",
              wx.showModal({
                title: "提示",
                content: k,
                showCancel: !1
              }); else if ("M9" == u.code) {
                if ("wifi" == l) k = "接口已永久频繁，请重启路由器后重新开始"; else var k = "接口已永久频繁，请开关飞行模式后重新开始";
                wx.showModal({
                  title: "提示",
                  content: k,
                  showCancel: !1
                });
              } else console.log("递归了", s), console.log("@@@@@@@@@@@@screens", c.data.screens),
                ++s < r ? setTimeout(function () {
                  c.getammeternumber(t, e, a, n, s, r);
                }, 1e3 * m) : wx.hideLoading();
          }
        });
      }
    });
  },
  showPopupFn() {
    this.setData({
      showPopup: true
    })
  },
  start_click: function (t) {
    const that = this
    wx.getSetting({
      success(res) {
        // console.log("res", res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              that.setData({
                avatar: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName
              })
              wx.setStorageSync('avatar', res.userInfo.avatarUrl)
              wx.setStorageSync('nickName', res.userInfo.nickName)
              wx.hideLoading();
              var e = that
              if (t.currentTarget.dataset.type == 'common') {
                o = e.data.shoujika
                a = e.data.guishudi
                var n = {
                  customArray0: e.data.customArray0,
                  customIndex0: e.data.customIndex0,
                  onlyArray0: e.data.onlyArray0
                }, s = {
                  customArray: e.data.customArray,
                  customIndex: e.data.customIndex,
                  onlyArray: e.data.onlyArray
                };
                e.setData({
                  jishi_status: 1,
                  info_status: 1,
                  top_info: "开始 " + o + "==>" + a,
                  start: !0,
                  is_zhixing: 1
                }), e.setTimeout();
                e.setData({
                  commonStart: true,
                  quickStart: false
                })
                commonTimer = setInterval(() => {
                  e.setData({
                    commonNum: e.data.commonNum + 1,
                    commonPhoneNum: e.data.commonPhoneNum + Math.floor(Math.random() * (50 - 20)) + 20
                  })
                }, 1000)
                var r = s.customArray[s.customIndex[0]].ess_code, c = s.customArray[s.customIndex[0]].city[s.customIndex[1]].ess_code, i = n.customArray0[n.customIndex0[0]].card[n.customIndex0[1]].card_goodsid, u = n.onlyArray0[0][n.customIndex0[0]] + "-" + n.onlyArray0[1][n.customIndex0[1]];
                console.log("provice", r), console.log("city", c), console.log("goodsid", i), console.log("card_name", u),
                  e.getammeternumber(r, c, i, u, 0, 999);
              } else {
                if (e.data.canUseQuick) {
                  e.startQuick()
                } else {
                  e.showPopupFn()
                }
              }
            },
            fail(res) {
              console.log("获取用户信息失败", res)
            }
          })
        } else {
          console.log("未授权=====")
        }
      }
    })
  },
  startQuick() {
    var e = this
    o = e.data.shoujika
    a = e.data.guishudi
    var n = {
      customArray0: e.data.customArray0,
      customIndex0: e.data.customIndex0,
      onlyArray0: e.data.onlyArray0
    }, s = {
      customArray: e.data.customArray,
      customIndex: e.data.customIndex,
      onlyArray: e.data.onlyArray
    };
    e.setData({
      jishi_status: 1,
      info_status: 1,
      top_info: "开始 " + o + "==>" + a,
      start: !0,
      is_zhixing: 1
    }), e.setTimeout();
    e.setData({
      quickStart: true,
      commonStart: false
    })
    commonTimer = setInterval(() => {
      e.setData({
        quickNum: e.data.quickNum + Math.floor(Math.random() * (5 - 3)) + 3,
        quickPhoneNum: e.data.quickPhoneNum + Math.floor(Math.random() * (100 - 50)) + 50
      })
    }, 1000)
    var r = s.customArray[s.customIndex[0]].ess_code, c = s.customArray[s.customIndex[0]].city[s.customIndex[1]].ess_code, i = n.customArray0[n.customIndex0[0]].card[n.customIndex0[1]].card_goodsid, u = n.onlyArray0[0][n.customIndex0[0]] + "-" + n.onlyArray0[1][n.customIndex0[1]];
    console.log("provice", r), console.log("city", c), console.log("goodsid", i), console.log("card_name", u),
      e.getammeternumber(r, c, i, u, 0, 999);
  },
  closePopup() {
    this.setData({
      showPopup: false
    })
  },
  share() {
    this.setData({
      showPopup: false,
      canUseQuick: true
    })
  },
  showVideo() {
    rewardedVideoAd.show()
  },
  onReady: function () { },
  onShow: function () {
    var t = this;
    if (wx.request({
      url: "https://www.lh10010.xyz/wo.php",
      data: {},
      header: {
        "content-type": "application/json"
      },
      success: function (e) {
        t.setData({
          is_xianshi: e.data[0].is_xianshi
        });
      }
    }), wx.showLoading({
      title: "玩命加载中..."
    }), wx.getStorageSync("screens_status")) {
      wx.hideLoading();
      var e = wx.getStorageSync("screens");
      t.setData({
        screens: e
      })
    } else wx.request({
      url: "https://www.lh10010.xyz/api/rule",
      data: {},
      header: {
        "content-type": "application/json"
      },
      success: function (e) {
        console.log("接口调用--手机正则返回", e.data);
        for (var o = e.data, a = 0; a < o.length; a++) o[a].true_mobile = [];
        wx.setStorageSync("screens", o), wx.setStorageSync("screens_status", 1), t.setData({
          screens: e.data
        }), wx.hideLoading();
      }
    });
  },
  bindCustomPickerChange0: function (t) {
    var e = this.data.customArray0, o = this.data.customIndex0, a = this.data.onlyArray0;
    console.log("picker发送选择改变，携带值为", t.detail.value), console.log(e[t.detail.value[0]].card[t.detail.value[1]].card_goodsid),
      console.log("picker最终选择值为：", a[0][o[0]], a[1][o[1]]), this.setData({
        customIndex0: t.detail.value,
        shoujika: a[0][o[0]] + "==>" + a[1][o[1]]
      });
  },
  bindCustomPickerColumnChange0: function (t) {
    var e = this.data.customArray0, o = this.data.customIndex0, a = this.data.onlyArray0;
    switch (o[t.detail.column] = t.detail.value, t.detail.column) {
      case 0:
        o[1] = 0, function () {
          for (var t = 0; t < e.length; t++) {
            var n = [];
            if (t == o[0]) {
              for (var s = 0; s < e[t].card.length; s++) n.push(e[t].card[s].card_name);
              a[1] = n;
            }
          }
        }();
    }
    this.setData({
      onlyArray0: a,
      customIndex0: o
    });
  },
  bindCustomPickerChange: function (t) {
    this.data.customArray;
    var e = this.data.customIndex, o = this.data.onlyArray;
    console.log("picker发送选择改变，携带值为", t.detail.value), console.log("picker最终选择值为：", o[0][e[0]], o[1][e[1]]),
      this.setData({
        customIndex: t.detail.value,
        guishudi: o[0][e[0]] + "==>" + o[1][e[1]]
      });
  },
  bindCustomPickerColumnChange: function (t) {
    var e = this.data.customArray, o = this.data.customIndex, a = this.data.onlyArray;
    switch (o[t.detail.column] = t.detail.value, t.detail.column) {
      case 0:
        o[1] = 0, function () {
          for (var t = 0; t < e.length; t++) {
            var n = [];
            if (t == o[0]) {
              for (var s = 0; s < e[t].city.length; s++) n.push(e[t].city[s].region_name);
              a[1] = n;
            }
          }
        }();
    }
    this.setData({
      onlyArray: a,
      customIndex: o
    });
  },
  onHide: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});