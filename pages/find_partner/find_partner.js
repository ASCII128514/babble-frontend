// pages/find_partner/find_partner.js

import { increaseGameRound } from '../../utils/play_game_api.js';

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

    console.log("find_partner onLoad");
    increaseGameRound();
    const currentGameRound = getApp().globalData.currentGameRound
    this.setData({ currentGameRound })

    const numberOfRounds = getApp().globalData.numberOfRounds
    this.setData({ numberOfRounds })
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