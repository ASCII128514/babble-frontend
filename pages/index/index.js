//index.js
//获取应用实例
const app = getApp()

Page({

  buttonClicked: function () {
    wx.navigateTo({
      url: '/pages/creation/creation'
    })
  },

  onLoad: function (query) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    })
    wx.setNavigationBarTitle({
      title: 'The best ice-breaker!',
    })
      console.log('in Onload')
      // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
      let scene = null
      if (query.scene != '1'){
        console.log(query)
        scene = decodeURIComponent(query.scene)
      } else {
        scene = query.scene
      }
      console.log(scene);
      getApp().globalData.qrCodeData = scene

      if (scene !== null) {
        wx.request({
          url: `http://localhost:3000/api/v1/game/${scene}`,
          method: 'get',
          success: res => {
            console.log(res.data)
            if (res.data.game.status !== 'end') {
              getApp().globalData.players = res.players
              const response = res
              wx.connectSocket({
                url: 'ws://localhost:3000/cable',
                header: {
                  'content-type': 'application/json'
                }
              })

              wx.onSocketOpen(function (res) {
                const id = JSON.stringify({
                  channel: "GameChannel",
                  room: response.data.game.id,
                  token: wx.getStorageSync('token')
                })
                // const data = JSON.stringify({
                  
                // })
                wx.sendSocketMessage({
                  data: JSON.stringify({
                    command: 'subscribe',
                    identifier: id,
                    // data: data
                  })
                })
              })




















              wx.onSocketMessage(function (res) {
                const value = JSON.parse(res.data)
                // console.log(res)
                if (value.type != 'ping' && value.type != 'welcome') {
                  console.log('hahaha', value)
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
})
