// pages/room/room.js
Page({


  data: {
    numOfPeople: 0
  },

  onLoad: function (options) {

    // top bar styling
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FBFBFB',
    })

    wx.setNavigationBarTitle({
      title: 'Waiting room',
    })
    // top bar styling

    const playerList = getApp().globalData.playerList
    const page = this
    page.setData({
      playerList
    })
    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('in room')
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "users") {
          console.log("players:", value.message.players);
          page.setData({
            playerList: value.message.players
          })
          page.setData({
            numOfPeople: value.message.players.length
          })


        } else if (value.message.type == "pair") {
          getApp().globalData.pair = value.message.pairs[wx.getStorageSync('token')]
          getApp().globalData.currentGameRound = value.message.round
          console.log(getApp().globalData.pair)
          console.log("question", getApp().globalData.pair.question)
          wx.redirectTo({
            url: '/pages/find_partner/find_partner'
          })
        } else if (value.message.type == 'finish') {
          wx.setStorageSync('room', null);
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      }
    })
  },
  getPair: function () {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${getApp().globalData.qrCodeData}/pair?round=${getApp().globalData.currentGameRound + 1}&token=${wx.getStorageSync('token')}`
    })
  },
  onReady: function () {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${getApp().globalData.qrCodeData}/display`,
    })
  }
})