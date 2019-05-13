import listenSocket from '../../utils/websocket';

// pages/special_room/special_room.js
Page({
  onLoad() {
    const scene = wx.getStorageSync('room');
    if (scene !== null && scene !== 'undefined') {
      wx.setStorageSync('room', scene);
      console.log('set storage');
      wx.request({
        url: `http://localhost:3000/api/v1/game/${scene}`,
        method: 'get',
        success: (res) => {
          console.log('res data:', res.data);
          if (res.data.game.status !== 'end') {
            getApp().globalData.players = res.players;

            let x = res.data.game.find_partner_timer % 60;
            if (x === 0) {
              x = '00';
            } else {
              x = `${x}`;
            }
            getApp().globalData.gameTimeIndices.partnerTime.seconds = x;
            const m = Number.parseInt(res.data.game.find_partner_timer / 60, 10);
            getApp().globalData.gameTimeIndices.partnerTime.minutes = m;
            console.log('mintue', m);
            let y = res.data.game.question_timer % 60;
            if (y === 0) {
              y = '00';
            } else {
              y = `${y}`;
            }
            getApp().globalData.gameTimeIndices.questionTime.seconds = y;
            const j = Number.parseInt(res.data.game.question_timer / 60, 10);
            getApp().globalData.gameTimeIndices.questionTime.minutes = j;
            console.log('mintue', getApp().globalData.gameTimeIndices.questionTime.minutes);

            const response = res;
            wx.connectSocket({
              url: 'ws://localhost:3000/cable',
              header: {
                'content-type': 'application/json',
              },
            });
            wx.onSocketOpen(() => {
              const id = JSON.stringify({
                channel: 'GameChannel',
                room: response.data.game.id,
                token: wx.getStorageSync('token'),
              });
              wx.sendSocketMessage({
                data: JSON.stringify({
                  command: 'subscribe',
                  identifier: id,
                  // data: data
                }),
              });
            });
            listenSocket(this);
            wx.reLaunch({
              url: '/pages/room/room',
            });
          } else {
            // clear the phone's storage
            wx.setStorageSync('room', null);
            wx.reLaunch({
              url: '/pages/index/index',
            });
          }
        },
      });
    } else {
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }
  },
});
