//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        // check if user has logged-in before
        var value = wx.getStorageSync('token');
        console.log(value == false)
        if (value) {
          console.log("logged in as existing user")
          wx.request({
            url: 'http://localhost:3000/api/v1/login',
            method: 'POST',
            data: {
              "tokens": {
                "token": value
              }
            },
            success: (res) => {
              const token = res.data;
              console.log(res)
            }
          });
        } else {
          //Initiate network request to backend
          wx.request({
            url: 'http://localhost:3000/api/v1/login',
            method: 'POST',
            header: {
              'content-type': 'application/json' // 默认值
            },
            data: {
              code: res.code
            },
            success: (token) => {
              console.log(token.data.authen)
              wx.setStorage({
                key: 'token',
                data: token.data.authen,
                success: () => {
                  console.log('new user success')
                }
              })
            }
          })
        }
      }
    })
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})