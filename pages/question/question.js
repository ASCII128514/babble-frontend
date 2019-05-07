// pages/question/question.js
const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound
let x

import { increaseGameRound, gameTimer } from '../../utils/play_game_api.js';
import { convertArrayToSeconds } from '../../utils/create_game_api.js';

Page({
  // top bar styling
  onLoad: function (options) {
    var page = this
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FBFBFB',
    })

    wx.setNavigationBarTitle({
      title: 'Question time!',
    })

    this.setData({
      question: getApp().globalData.pair.question
    })

    const currentGameRound = getApp().globalData.currentGameRound
    this.setData({ currentGameRound })

    const numberOfRounds = getApp().globalData.numberOfRounds
    this.setData({ numberOfRounds })











    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('in room')
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "users") {
          console.log("players:", value.message.players);
          page.setData({ playerList: value.message.players })

        } else if (value.message.type == "pair") {
          getApp().globalData.pair = value.message.pairs[wx.getStorageSync('token')]
          getApp().globalData.currentGameRound = value.message.round
          console.log(getApp().globalData.pair)
          console.log("question", getApp().globalData.pair.question)
          wx.reLaunch({
            url: '/pages/find_partner/find_partner'
          })
        } else if (value.message.type == 'finish') {
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      }
    })










    let objectOfSeconds = convertArrayToSeconds();



    // Set the date we're counting down to
    let timerEndTime = objectOfSeconds['question_timer'] * 1000 + getApp().globalData.extraSec * 1000
    // let timerEndTime = 6 * 1000 + getApp().globalData.extraSec * 1000
    var countDownTime = new Date().getTime() + timerEndTime;
    getApp().globalData.extraSec = 0

    // Update the count down every 1 second
    x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownTime - now;

      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      // If the count down is finished, write some text 
      if (distance <= 0 ) {
        clearInterval(x);
        console.log(this)
        // if (this == page)
        if ( getApp().globalData.currentGameRound < getApp().globalData.numberOfRounds ){
          wx.request({
            url: `https://babble.wogengapp.cn/api/v1/game/${getApp().globalData.qrCodeData}/pair?round=${getApp().globalData.currentGameRound + 1}&token=${wx.getStorageSync('token')}`
          }) 
        } else {
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      }



      // Display the result in the element with id="demo"
      var s = seconds
      var m = minutes
      if (s == -1) {
        s = 0
      }
      if (m == -1) {
        m = 0
      }
      var countdown = m + ":" + s;
      page.setData({
        timerCountdown: countdown
      })
    }, 1000);













    // gameTimer(objectOfSeconds, 'question_timer', '/pages/find_partner/find_partner', this);
  },

})