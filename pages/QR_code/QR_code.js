// pages/QR_code/QR_code.js
const app = getApp();

Page({
  buttonClicked() {
    wx.reLaunch({
      url: `/pages/login/login?scene=${this.data.roomId}`,
    });
  },

  onLoad() {
    this.setData({
      qrCodeUrl: app.globalData.qrCodeUrl,
      roomId: app.globalData.roomId,
    });
    wx.setStorageSync('room', app.globalData.roomId);
    app.globalData.roomId = null;

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Share QR Code',
    });
  },
});
