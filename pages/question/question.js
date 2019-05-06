// pages/question/question.js
Page({

  goToQuestion: function () {
    wx.navigateTo({
      url: '/pages/find_partner/find_partner'
    })
  },

  // top bar styling
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FBFBFB',
    })

    wx.setNavigationBarTitle({
      title: 'Question time!',
    })
  },

})