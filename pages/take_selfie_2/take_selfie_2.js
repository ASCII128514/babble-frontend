// pages/take_selfie_2/take_selfie_2.js
let app = getApp()

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
    this.setData({
      previewSelfie: app.globalData.previewSelfie
    })

    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f5f5f5',
    })

    wx.setNavigationBarTitle({
      title: 'Review your picture',
    })
  },

  goBack: function () {
    wx.navigateTo({
      url: '/pages/take_selfie/take_selfie'
    })
  },

  continue: function () {
    wx.navigateTo({
      url: '/pages/instruction_find/instruction_find'
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