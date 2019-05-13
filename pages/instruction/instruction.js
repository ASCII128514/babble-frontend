// pages/instruction/instruction.js
Page({

  buttonClicked() {
    wx.navigateTo({
      url: '/pages/set_rounds/set_rounds',
    });
  },

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
      title: 'How to play',
    });
  },
});
