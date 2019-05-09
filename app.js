//app.js
const AV = require('./utils/av-webapp-min.js')
const config = require('./secret')
AV.init({
  appId: config.appid,
  appKey: config.secret
})

App({
  onHide: function() {
    wx.reLaunch({
      url: '/pages/special_room/special_room',
    })
  },
  onLaunch: function () {
    // var app = this
    // console.log(wx.getStorageSync("token"));
    // // 展示本地存储能力
    // var logs = wx.getStorageSync("logs") || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync("logs", logs);

    // wx.login({
    //   success: res => {
    //     // check if user has logged-in before
    //     var value = wx.getStorageSync("token");
    //     if (value) {
    //       console.log("logged in as existing user");
    //       wx.request({
    //         url: "https://babble.wogengapp.cn/api/v1/login",
    //         method: "POST",
    //         data: {
    //           tokens: {
    //             token: value,
    //           },
    //         },
    //         success: res => {
    //           console.log(res.data.currentUser)
    //           app.globalData.currentUser = res.data.currentUser
    //           const token = res.data;
    //         },
    //       });
    //     } else {
    //       //Initiate network request to backend
    //       wx.request({
    //         url: "https://babble.wogengapp.cn/api/v1/login",
    //         method: "POST",
    //         header: {
    //           "content-type": "application/json", // 默认值
    //         },
    //         data: {
    //           code: res.code,
    //         },
    //         success: token => {
    //           console.log(token.data.authen);
    //           wx.setStorage({
    //             key: "token",
    //             data: token.data.authen,
    //             success: () => {
    //               app.globalData.currentUser = res.data.currentUser
    //               console.log("new user success");
    //             },
    //           });
    //         },
    //       });
    //     }
    //   },
    // });
    // // wx.login({
    // //   success: res => {
    // //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    // //   }
    // // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting["scope.userInfo"]) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo;

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res);
    //           }
    //         },
    //       });
    //     }
    //   },
    // });
  },

  globalData: {
    userInfo: null,
    gameTime: {
      minute_possibilities: ["0", "1", "2", "3"],
      second_possibilities: ["00", "15", "30", "45"],
    },
    gameTimeIndices: {
      partnerTime: {
        minutes: "2",
        seconds: "00",
      },
      questionTime: {
        minutes: "2",
        seconds: "00",
      },
      selfieTime: {
        minutes: "0",
        seconds: "45",
      },
    },
    numberOfRounds: 5,

    playerList: [],
    extraSec: 0,

    currentGameRound: 0,
    pairs: {}
  }
});