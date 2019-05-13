// pages/timer_question/timer_question.js
Page({
  buttonClicked() {
    wx.navigateTo({
      url: '/pages/timer_question/timer_question',
    });
  },

  data: {
    gameTime: {},
    gameTimeIndices: {},
  },

  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Game setting',
    });

    // Copy arrays from globalData to data
    const { gameTime } = getApp().globalData;
    const { gameTimeIndices } = getApp().globalData;
    this.setData({
      gameTime,
      gameTimeIndices,
      minute: gameTimeIndices.partnerTime.minutes,
      second: gameTimeIndices.partnerTime.seconds,
    });
  },

  questionTimeAmount(res) {
    getApp().globalData.gameTimeIndices.partnerTime.minutes = `${res.detail.value[0]}`;
    let s;
    if (res.detail.value[1] === 0) {
      s = '00';
    } else {
      s = `${res.detail.value[1] * 15}`;
    }
    getApp().globalData.gameTimeIndices.partnerTime.seconds = s;
    const { gameTimeIndices } = getApp().globalData;
    console.log(gameTimeIndices);
    console.log(getApp().globalData);
    this.setData({
      gameTimeIndices,
      minute: gameTimeIndices.partnerTime.minutes,
      second: gameTimeIndices.partnerTime.seconds,
    });
  },
});
