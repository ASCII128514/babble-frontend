// pages/timer_question/timer_question.js
Page({
  buttonClicked: function () {
    wx.navigateTo({
      url: '/pages/timer_question/timer_question'
    })
  },


  /**
   * Page initial data
   */
  data: {
    gameTime: {},
    gameTimeIndices: {},
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#F9FCFC',
    })

    wx.setNavigationBarTitle({
      title: 'Game setting',
    })

    // Copy arrays from globalData to data
    const gameTime = getApp().globalData.gameTime
    this.setData({ gameTime })

    let gameTimeIndices = getApp().globalData.gameTimeIndices
    this.setData({ gameTimeIndices })

  },

})