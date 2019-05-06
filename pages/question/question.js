// pages/question/question.js
const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound

import { increaseGameRound, gameTimer } from '../../utils/play_game_api.js';
import { convertArrayToSeconds } from '../../utils/create_game_api.js';

Page({

  goToQuestion: function () {
    wx.redirectTo({
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

    const currentGameRound = getApp().globalData.currentGameRound
    this.setData({ currentGameRound })

    const numberOfRounds = getApp().globalData.numberOfRounds
    this.setData({ numberOfRounds })

    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('check value for question:', value);
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "question") {
          console.log("question:", value.message.pairs);
          this.setData({ pairs: value.message.pairs })
        }
      }
    })

    let objectOfSeconds = convertArrayToSeconds();
    gameTimer(objectOfSeconds, 'question_timer', '/pages/find_partner/find_partner', this);
  },

})