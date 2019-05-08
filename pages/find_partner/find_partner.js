// pages/find_partner/find_partner.js
import {
  increaseGameRound,
  gameTimer
} from '../../utils/play_game_api.js';
import {
  convertArrayToSeconds
} from '../../utils/create_game_api.js';

var x;

Page({

  buttonClicked: function () {
    wx.navigateTo({
      url: '/pages/question/question'
    })
  },

  // drawing circle
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(4); // 设置圆环的宽度
    ctx.setStrokeStyle('#EEF0F4'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath(); //开始一个新的路径
    ctx.arc(150, 150, 138, 0, 2 * Math.PI, false);
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();
  },

  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    // var gradient = context.createLinearGradient(200, 100, 100, 200);
    var gradient = context.createLinearGradient(300, 200, 50, 20);
    gradient.addColorStop("0", "#2661DD");
    // gradient.addColorStop("0.3", "#C8E2C3");
    gradient.addColorStop("0.5", "#F5F6F7");
    // gradient.addColorStop("0.8", "#F5F6F7");
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

  countInterval: function () {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    let objectOfSeconds = convertArrayToSeconds();
    var sec = objectOfSeconds['question_timer'] * 10
    this.countTimer = setInterval(() => {
      if (this.data.count <= sec) {
        /* 绘制彩色圆环进度条
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (sec / 2))
        // this.drawCircle(this.data.count / (60 / 2))
        this.data.count++;
      } else {
        this.setData({
          progress_txt: "avatar"
        });
        clearInterval(this.countTimer);
      }
    }, 100)
  },

  onLoad: function (options) {
    // topbar styling
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    })

    wx.setNavigationBarTitle({
      title: 'Get it started!',
    })
    // topbar styling ends

    this.setData({
      user: getApp().globalData.pair.user
    })
    var page = this

    // increaseGameRound();
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
      console.log('check value for pairs:', value);
      if (value.type != 'ping' && value.type != 'welcome' && value.type != 'confirm_subscription') {
        if (value.message.type == "pairs") {
          console.log("pairs:", value.message.pairs);
          this.setData({
            pairs: value.message.pairs
          })
          getApp().globalData.currentGameRound = value.message.round
        } else if (value.message.type == 'finish') {
          clearInterval(this.countTimer);
          wx.reLaunch({
            url: '/pages/index/index',
          })
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
        clearInterval(this.countTimer);
        wx.reLaunch({
          url: '/pages/question/question'
        })
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

  },

  /**
   * Page initial data
   */

  // circle
  data: {
    progress_txt: 'matching...',
    count: 0, // 设置 计数器 初始为0
    countTimer: null // 设置 定时器 初始为null
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.drawProgressbg();
    this.countInterval()
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

  goToQuestion: function () {
    clearInterval(x);
    // send the extra minutes to the next page
    console.log(typeof (this.data.timerCountdown))
    var arr = this.data.timerCountdown.split(':')
    var sec = Number.parseInt(arr[0]) * 60 + Number.parseInt(arr[1])
    getApp().globalData.extraSec = sec
    console.log(getApp().globalData.extraSec);
    clearInterval(this.countTimer);
    wx.navigateTo({
      url: '/pages/question/question'
    })
  }
})