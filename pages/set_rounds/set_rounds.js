// pages/set_rounds/set_rounds.js
Page({

  buttonClicked() {
    wx.navigateTo({
      url: '/pages/timer_find_partner/timer_find_partner',
    });
  },

  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Game setting',
    });
  },

  roundsSlider(res) {
    console.log(res.detail.value);
    getApp().globalData.numberOfRounds = res.detail.value;
    console.log(getApp().globalData.numberOfRounds);
  },
});
