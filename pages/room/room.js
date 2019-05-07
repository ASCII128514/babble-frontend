// pages/room/room.js
import { gameTimer } from '../../utils/play_game_api.js';
import { convertArrayToSeconds } from '../../utils/create_game_api.js';
Page({


  data: {
    numOfPeople: 0
  },

  onLoad: function (options) {
    const playerList = getApp().globalData.playerList
    const page = this
    page.setData({ playerList })
    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('in room')
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "users") {
          console.log("players:", value.message.players);
          page.setData({playerList: value.message.players})
          page.setData({numOfPeople: value.message.players.length})
          

        } else if (value.message.type == "pair") {
          getApp().globalData.pair = value.message.pairs[wx.getStorageSync('token')]
          console.log(getApp().globalData.pair)
          console.log("question", getApp().globalData.pair.question)
          wx.redirectTo({
            url: '/pages/find_partner/find_partner'
          })
        }
      }
    })
  },
  getPair: function() {
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