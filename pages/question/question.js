// pages/question/question.js
const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound
let x

import {
  increaseGameRound,
  gameTimer
} from '../../utils/play_game_api.js';
import {
  convertArrayToSeconds
} from '../../utils/create_game_api.js';

Page({

  goToQuestion: function () {
    wx.redirectTo({
      url: '/pages/find_partner/find_partner'
    })
  },

  // drawing circle
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(3); // 设置圆环的宽度
    ctx.setStrokeStyle('#EEF0F4'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(150, 150, 138, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },

  // drawing colored circle
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#2661DD");
    gradient.addColorStop("0.5", "#40ED94");
    gradient.addColorStop("1.0", "#5956CC");
    context.setLineWidth(10);
    context.setStrokeStyle(gradient);
    context.setLineCap('round')
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(150, 150, 138, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw()
  },

  // count interval
  countInterval: function () {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    let objectOfSeconds = convertArrayToSeconds();
    var sec = objectOfSeconds['question_timer'] * 10 + getApp().globalData.extraSec * 10

    // var s = this.data.timerCountdown
    // console.log(this.data)
    console.log(sec)
    // var a = s.split(':')
    // var sec = (Number.parseInt(a[0]) * 60 + Number.parseInt(a[1])) * 1000
    this.countTimer = setInterval(() => {
      // split the fucking number from the first into seconds

      if (this.data.count <= sec) {
        /* 绘制彩色圆环进度条
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (sec / 2))
        this.data.count++;
      } else {
        this.setData({
          progress_txt: "Next round!"
        });
        clearInterval(this.countTimer);
      }
    }, 100)
  },

  onReady: function () {
    this.drawProgressbg();
    // this.drawCircle(2)
    this.countInterval()
    getApp().globalData.extraSec = 0
  },


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
    var name = getApp().globalData.pair.user.name
    this.setData({
      name: name,
      question: getApp().globalData.pair.question
    })

    const currentGameRound = getApp().globalData.currentGameRound
    this.setData({
      currentGameRound
    })

    const numberOfRounds = getApp().globalData.numberOfRounds
    this.setData({
      numberOfRounds
    })

    wx.onSocketMessage(function (res) {
      const value = JSON.parse(res.data)
      console.log('in room')
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "users") {
          console.log("players:", value.message.players);
          page.setData({
            playerList: value.message.players
          })

        } else if (value.message.type == "pair") {
          getApp().globalData.pair = value.message.pairs[wx.getStorageSync('token')]
          getApp().globalData.currentGameRound = value.message.round
          console.log(getApp().globalData.pair)
          console.log("question", getApp().globalData.pair.question)
          wx.reLaunch({
            url: '/pages/find_partner/find_partner'
          })
        } else if (value.message.type == 'finish') {
          wx.setStorageSync('room', null);
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
        // if (this == page)
        if (getApp().globalData.currentGameRound < getApp().globalData.numberOfRounds) {
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

  // for timer bar
  data: {
    progress_txt: 'progressing...',
    count: 0, // 设置 计数器 初始为0
    countTimer: null // 设置 定时器 初始为null
  }
})