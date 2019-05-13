// pages/question/question.js

import {
  convertArrayToSeconds,
} from '../../utils/create_game_api';
import listenSocket from '../../utils/websocket';

let x;

Page({
  // drawing circle
  drawProgressbg() {
    // 使用 wx.createContext 获取绘图上下文 context
    const ctx = wx.createCanvasContext('canvasProgressbg');
    ctx.setLineWidth(3); // 设置圆环的宽度
    ctx.setStrokeStyle('#EEF0F4'); // 设置圆环的颜色
    ctx.setLineCap('round'); // 设置圆环端点的形状
    ctx.beginPath(); // 开始一个新的路径
    ctx.arc(150, 150, 138, 0, 2 * Math.PI, false);
    // 设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke(); // 对当前路径进行描边
    ctx.draw();
  },

  // drawing colored circle
  drawCircle(step) {
    const context = wx.createCanvasContext('canvasProgress');
    // 设置渐变
    const gradient = context.createLinearGradient(250, 250, 0, 0);
    gradient.addColorStop('0', '#ffeaa5');
    gradient.addColorStop('0.5', '#ffeaa5');
    gradient.addColorStop('1.0', '#D6344F');
    context.setLineWidth(10);
    context.setStrokeStyle(gradient);
    context.setLineCap('round');
    context.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(150, 150, 138, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    context.stroke();
    context.draw();
  },

  // count interval
  countInterval() {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    const objectOfSeconds = convertArrayToSeconds();
    const sec = objectOfSeconds.question_timer * 10 + getApp().globalData.extraSec * 10;

    // var s = this.data.timerCountdown
    // console.log(this.data)
    console.log(sec);
    // var a = s.split(':')
    // var sec = (Number.parseInt(a[0]) * 60 + Number.parseInt(a[1])) * 1000
    this.countTimer = setInterval(() => {
      // split the fucking number from the first into seconds

      if (this.data.count <= sec) {
        /* 绘制彩色圆环进度条
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (sec / 2));
        this.data.count += 1;
      } else {
        this.setData({
          progress_txt: 'Next round!',
        });
        clearInterval(this.countTimer);
      }
    }, 100);
  },

  onReady() {
    this.drawProgressbg();
    // this.drawCircle(2)
    this.countInterval();
    getApp().globalData.extraSec = 0;
  },


  // top bar styling
  onLoad() {
    const page = this;
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Question time',
    });
    const { name } = getApp().globalData.pair.user;
    const { currentGameRound } = getApp().globalData;
    const { numberOfRounds } = getApp().globalData;
    this.setData({
      name,
      question: getApp().globalData.pair.question,
      currentGameRound,
      numberOfRounds,
    });

    listenSocket(page);

    wx.onSocketClose(() => {
      console.log('WebSocket 已关闭！');
    });

    const objectOfSeconds = convertArrayToSeconds();

    // Set the date we're counting down to
    let timerEndTime = objectOfSeconds.question_timer * 1000;
    timerEndTime += getApp().globalData.extraSec * 1000;
    // let timerEndTime = 6 * 1000 + getApp().globalData.extraSec * 1000
    const countDownTime = new Date().getTime() + timerEndTime;

    // Update the count down every 1 second
    x = setInterval(() => {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownTime - now;

      // Time calculations for days, hours, minutes and seconds
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);


      // If the count down is finished, write some text
      if (distance <= 0) {
        clearInterval(x);
        console.log(this);
        // if (this == page)
        // if (getApp().globalData.currentGameRound < getApp().globalData.numberOfRounds) {
        wx.request({
          url: `http://localhost:3000/api/v1/game/${getApp().globalData.qrCodeData}/pair?round=${getApp().globalData.currentGameRound + 1}&token=${wx.getStorageSync('token')}`,
        });
        // } else {
        //   wx.reLaunch({
        //     url: '/pages/finished_game/finished_game'
        //   })
        // }
      }

      // Display the result in the element with id='demo'
      let s = seconds;
      let m = minutes;
      if (s === -1) {
        s = 0;
      }
      if (m === -1) {
        m = 0;
      }
      if (s < 10) {
        s = `0${s}`;
      }
      const countdown = `${m}:${s}`;
      page.setData({
        timerCountdown: countdown,
      });
    }, 1000);
  },

  // for timer bar
  data: {
    progress_txt: 'progressing...',
    count: 0, // 设置 计数器 初始为0
    countTimer: null, // 设置 定时器 初始为null
  },
});
