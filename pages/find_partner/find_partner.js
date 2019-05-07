// pages/find_partner/find_partner.js

import { increaseGameRound, gameTimer } from '../../utils/play_game_api.js';
import { convertArrayToSeconds } from '../../utils/create_game_api.js';


var x;


Page({

  // top bar styling
  onLoad: function (options) {
    this.setData({
      user: getApp().globalData.pair.user
    })
    var page = this
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FBFBFB',
    })

    wx.setNavigationBarTitle({
      title: 'Who is your partner?',
    })

    increaseGameRound();
    const currentGameRound = getApp().globalData.currentGameRound
    this.setData({ currentGameRound })

    const numberOfRounds = getApp().globalData.numberOfRounds
    this.setData({ numberOfRounds })

    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('check value for pairs:', value);
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "pairs") {
          console.log("pairs:", value.message.pairs);
          this.setData({ pairs: value.message.pairs })
        }
      }
    })

    let objectOfSeconds = convertArrayToSeconds();
    // Set the date we're counting down to
    let timerEndTime = objectOfSeconds['find_partner_timer'] * 1000
    // let timerEndTime = 6 * 1000
    var countDownTime = new Date().getTime() + timerEndTime;

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
      if (distance <= 0) {
        clearInterval(x);
        console.log(this)
        wx.redirectTo({
          url: '/pages/question/question'
        })
      }



      // Display the result in the element with id="demo"
      var s = seconds
      var m = minutes
      if (s == -1 ) {
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


































  },

  /**
   * Page initial data
   */
  data: {

  },

  

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  goToQuestion: function() {
    clearInterval(x);
    // send the extra minutes to the next page
    console.log(typeof(this.data.timerCountdown))
    var arr = this.data.timerCountdown.split(':')
    var sec = Number.parseInt(arr[0]) * 60 + Number.parseInt(arr[1])
    getApp().globalData.extraSec = sec
    console.log(getApp().globalData.extraSec);
    wx.navigateTo({
      url: '/pages/question/question'
    })
  }
})