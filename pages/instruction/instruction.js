// pages/instruction/instruction.js
Page({

  buttonClicked: function () {
    wx.navigateTo({
      url: '/pages/set_rounds/set_rounds'
    })
  },

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#A7C3EC',
      })

      wx.setNavigationBarTitle({
        title: 'How to play',
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