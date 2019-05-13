// app.js
const AV = require('./utils/av-webapp-min.js');
const config = require('./secret');

AV.init({
  appId: config.appid,
  appKey: config.secret,
});

App({
  onHide() {
    wx.reLaunch({
      url: '/pages/special_room/special_room',
    });
  },

  globalData: {
    userInfo: null,
    gameTime: {
      minute_possibilities: ['0', '1', '2', '3'],
      second_possibilities: ['00', '15', '30', '45'],
    },
    gameTimeIndices: {
      partnerTime: {
        minutes: '2',
        seconds: '00',
      },
      questionTime: {
        minutes: '2',
        seconds: '00',
      },
      selfieTime: {
        minutes: '0',
        seconds: '45',
      },
    },
    numberOfRounds: 5,

    playerList: [],
    extraSec: 0,

    currentGameRound: 0,
    pairs: {},
  },
});
