import listenSocket from '../../utils/websocket';

// pages/room/room.js
Page({

  data: {
    numOfPeople: 0,
  },

  onLoad() {
    // top bar styling
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Waiting room',
    });
    // top bar styling

    const { playerList } = getApp().globalData;
    const page = this;
    page.setData({
      playerList,
    });
    listenSocket(page);
    wx.onSocketClose(() => {
      console.log('WebSocket 已关闭！');
    });
  },

  getPair() {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${getApp().globalData.qrCodeData}/pair?round=${getApp().globalData.currentGameRound + 1}&token=${wx.getStorageSync('token')}`,
    });
  },
  onReady() {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${getApp().globalData.qrCodeData}/display`,
    });
  },
});
