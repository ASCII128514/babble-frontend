// pages/room/room.js
import { gameTimer } from '../../utils/play_game_api.js';
import { convertArrayToSeconds } from '../../utils/create_game_api.js';
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
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

    let objectOfSeconds = convertArrayToSeconds();
    gameTimer(objectOfSeconds, 'find_partner_timer', '/pages/question/question', this);
  },

  shittyButton: function () {
    wx.redirectTo({
      url: '/pages/find_partner/find_partner'
    })
  },





  getPair: function() {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${getApp().globalData.qrCodeData}/pair?round=${getApp().globalData.currentGameRound + 1}&token=${wx.getStorageSync('token')}`
    })
  },
  











  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})