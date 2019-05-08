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
    wx.setStorageSync('room', app.globalData.roomId);
    app.globalData.roomId = null

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#A7C3EC',
    })

    wx.setNavigationBarTitle({
      title: 'Share QR Code',
    })

  }
})