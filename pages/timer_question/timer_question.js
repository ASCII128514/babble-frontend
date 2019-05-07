// pages/timer_question/timer_question.js
import { createGame, setTime, convertArrayToSeconds } from '../../utils/create_game_api.js';

Page({

  buttonClicked: function () {
    let objectOfSeconds = convertArrayToSeconds();
    createGame(objectOfSeconds, this);
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
      frontColor: '#000000',
      backgroundColor: '#F9FCFC',
    })

    wx.setNavigationBarTitle({
      title: 'Game setting',
    })
    // Copy arrays from globalData to data
    const gameTime = getApp().globalData.gameTime
    this.setData({ gameTime })

    let gameTimeIndices = getApp().globalData.gameTimeIndices
    this.setData({ gameTimeIndices })
  },
})