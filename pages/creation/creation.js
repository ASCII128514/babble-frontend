// pages/creation/creation.js
import { createGame, setTime } from '../../utils/game_api.js';

let app = getApp()
let globalData = app.globalData || {}

Page({
  /**
   * Page initial data
   */
  data: {
    gameTime: [],
    gameTimeIndices: [],
    minute: "",
    second: ""
  },

  // styling for top bar
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    })

    wx.setNavigationBarTitle({
      title: 'BABBLE',
    })

    // Copy arrays from globalData to data
    const gameTime = globalData.gameTime
    this.setData({ gameTime })

    const gameIndex = globalData.gameIndex
    this.setData({ gameIndex })
  },
  // styling for top bar ends

  toStatus: function () {
    wx.navigateTo({
      url: '/pages/status_page/status_page'
    })
  },

  partnerMatchTimeAmount: function (e) {
    setTime(e, this, "partner");
  },

  questionTimeAmount: function (e) {
    setTime(e, this, "question");
  },

  // createGameSubmit: (e) => {
  //   createGame(e);
  // },

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