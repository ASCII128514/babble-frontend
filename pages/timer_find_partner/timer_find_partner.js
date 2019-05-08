// pages/timer_question/timer_question.js
Page({
  buttonClicked: function () {
    wx.navigateTo({
      url: '/pages/timer_question/timer_question'
    })
  },


  /**
   * Page initial data
   */
  data: {
    gameTime: {},
    gameTimeIndices: {},
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

    // Copy arrays from globalData to data
    const gameTime = getApp().globalData.gameTime
    this.setData({ gameTime })

    let gameTimeIndices = getApp().globalData.gameTimeIndices
    this.setData({ gameTimeIndices,
      minute: gameTimeIndices.partnerTime.minutes,
      second: gameTimeIndices.partnerTime.seconds
    })

  },

  questionTimeAmount: function (res) {

    getApp().globalData.gameTimeIndices.partnerTime.minutes = `${res.detail.value[0]}`
    var s
    if (res.detail.value[1] === 0) {
      s = '00'
    } else {
      s = `${res.detail.value[1] * 15}`
    }
    getApp().globalData.gameTimeIndices.partnerTime.seconds = s
    let gameTimeIndices = getApp().globalData.gameTimeIndices
    console.log(gameTimeIndices)
    this.setData({ gameTimeIndices,
      minute: gameTimeIndices.partnerTime.minutes,
      second: gameTimeIndices.partnerTime.seconds
    })
  }

})