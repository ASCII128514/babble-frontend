// pages/set_rounds/set_rounds.js
Page({

  buttonClicked: function () {
    wx.navigateTo({
      url: '/pages/timer_find_partner/timer_find_partner'
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
      title: 'Game setting',
    })
  },

  roundsSlider: function(res) {
    getApp().globalData.numberOfRounds = res.detail.value
  }
})