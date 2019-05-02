// pages/question/question.js
Page({

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
      title: 'Question time!',
    })
  },

})