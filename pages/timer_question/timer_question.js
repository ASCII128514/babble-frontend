// pages/timer_question/timer_question.js
import { createGame, convertArrayToSeconds } from '../../utils/create_game_api';

Page({

  buttonClicked() {
    const objectOfSeconds = convertArrayToSeconds();
    createGame(objectOfSeconds);
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
      minute: gameTimeIndices.questionTime.minutes,
      second: gameTimeIndices.questionTime.seconds,
    });
  },

  questionTimeAmount(res) {
    getApp().globalData.gameTimeIndices.questionTime.minutes = `${res.detail.value[0]}`;
    let s;
    if (res.detail.value[1] === 0) {
      s = '00';
    } else {
      s = `${res.detail.value[1] * 15}`;
    }
    getApp().globalData.gameTimeIndices.questionTime.seconds = s;
    const { gameTimeIndices } = getApp().globalData;
    console.log(gameTimeIndices);
    console.log(getApp().globalData);
    this.setData({
      gameTimeIndices,
      minute: gameTimeIndices.questionTime.minutes,
      second: gameTimeIndices.questionTime.seconds,
    });
  },
});
