// pages/find_partner/find_partner.js

import { increaseGameRound, gameTimer } from '../../utils/play_game_api.js';
import { convertArrayToSeconds } from '../../utils/create_game_api.js';

Page({
  // button to next page
  goToQuestion: function () {
    wx.navigateTo({
      url: '/pages/question/question'
    })
  },

  // top bar styling
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#DFFBFE',
    })

    wx.setNavigationBarTitle({
      title: 'Find your partner',
    })

    increaseGameRound();
    const currentGameRound = getApp().globalData.currentGameRound
    this.setData({ currentGameRound })

    const numberOfRounds = getApp().globalData.numberOfRounds
    this.setData({ numberOfRounds })

    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('check value for pairs:', value);
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "pairs") {
          console.log("pairs:", value.message.pairs);
          this.setData({ pairs: value.message.pairs })
        }
      }
    })

    let objectOfSeconds = convertArrayToSeconds();
    gameTimer(objectOfSeconds, 'find_partner_timer', '/pages/question/question');
  },

  /**
   * Page initial data
   */
  data: {

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