// pages/question/question.js
const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound

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
      backgroundColor: '#DFFBFE',
    })

    wx.setNavigationBarTitle({
      title: 'Question time!',
    })
  },

})