// pages/finished_game/finished_game.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });
    wx.setNavigationBarTitle({
      title: 'Finished Game',
    });
    this.setData({
      number: getApp().globalData.numberOfRounds,
    });
  },
  goToIndex() {
    wx.reLaunch({
      url: '/pages/index/index',
    });
  },
});
