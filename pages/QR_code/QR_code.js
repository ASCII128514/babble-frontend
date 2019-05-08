// pages/QR_code/QR_code.js
let app = getApp()

Page({
  buttonClicked: function () {
    var page = this
    wx.reLaunch({
      url: `/pages/login/login?scene=${this.data.roomId}`
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
    this.setData({
      qrCodeUrl: app.globalData.qrCodeUrl,
      roomId: app.globalData.roomId
    })
    app.globalData.roomId = null

    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#F9FCFC',
    })

    wx.setNavigationBarTitle({
      title: 'QR code',
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