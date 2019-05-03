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
        if (value) {
          console.log("logged in as existing user")
          wx.request({
            url: 'https://babble.wogengapp.cn/api/v1/login',
            method: 'POST',
            data: {
              "tokens": {
                "token": value
              }
            },
            success: (res) => {
              const token = res.data;
            }
          });
        } else {
          //Initiate network request to backend
          wx.request({
            url: 'https://babble.wogengapp.cn/api/v1/login',
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
  onLoad(query) {
    // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
    const scene = decodeURIComponent(query.scene)
    console.log(scene);
    this.globalData.qrCodeData = scene

    if (scene !== null ) {
      wx.request({
        url: `https://babble.wogengapp.cn/api/v1/game/show/${scene}`,
        success: res => {
          if (res.game.status !== 'end') {
            getApp().globalData.players = res.players

            wx.connectSocket({
              url: 'ws://babble.wogengapp.cn/cable',
              header: {
                'content-type': 'application/json'
              }
            })

            wx.onSocketOpen(function (res) {
              socketOpen = true
              const id = JSON.stringify({
                channel: "GameChannel"
              })
              wx.sendSocketMessage({
                data: JSON.stringify({
                  command: 'subscribe',
                  identifier: id,
                  room: res.game.id,
                  token: wx.getStorageSync('token')
                })
              })
              for (let i = 0; i < socketMsgQueue.length; i++) {
                sendSocketMessage(socketMsgQueue[i])
              }
              socketMsgQueue = []
            })


























            function sendSocketMessage(msg) {
              if (socketOpen) {
                wx.sendSocketMessage({
                  data: msg
                })
              } else {
                socketMsgQueue.push(msg)
              }
            }



            wx.onSocketMessage(function (res) {
              const value = JSON.parse(res.data)
              console.log(res)
              if (value.type != 'ping' && value.type != 'welcome') {
                console.log('hahaha', value);

                switch(value.type) {
                  case "players":
                    this.globalData.playerList = value.players
                    break;
                  case "pairs":
                    this.globalData.playerPairs = value.pairs
                    break;
                }
              }
            })









































            wx.navigateTo({
              url: '/pages/room/room',
            })
          }
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    gameTime: {
      minute_possibilities: ["0", "1", "2", "3"],
      second_possibilities: ["00", "15", "30", "45"]
    },
    gameTimeIndices: {
      partnerTime: {
        minutes: "1",
        seconds: "00"
      },
      questionTime: {
        minutes: "2",
        seconds: "00"
      }, 
      selfieTime: {
        minutes: "0",
        seconds: "45"
      }
    },
    numberOfRounds: 5,
  }
})