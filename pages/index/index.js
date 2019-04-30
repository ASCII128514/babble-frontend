//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    })

    wx.setNavigationBarTitle({
      title: 'The best ice-breaker!',
    })
  },
})
