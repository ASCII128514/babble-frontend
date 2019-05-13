import listenSocket from './websocket';

const switching = (query, page) => {
  // check whether the user already have a game stored in his storage before everything else
  // make request to the api to check whether the game is ended
  // set the scene to that room if it is not expired
  // clear it if the room is expired.
  let scene = null;
  const storageRoom = wx.getStorageSync('room');

  if (storageRoom) {
    // make api call to check whether the room is expired
    scene = storageRoom;
    page.setData({
      modalHidden: false,
    });
  }


  if (typeof query.scene === 'undefined' && scene === null) {
    wx.reLaunch({
      url: '/pages/index/index',
    });
    return;
  }
  if (typeof query.scene === 'string') {
    console.log('query:', query);
    scene = decodeURIComponent(query.scene);
  }
  console.log('scene', scene);
  getApp().globalData.qrCodeData = scene;
  console.log(scene !== 'undefined');
  console.log(scene !== null);
  console.log('in redirect');
  console.log(scene);
  if (scene !== null && scene !== 'undefined') {
    wx.setStorageSync('room', scene);
    console.log('set storage');
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${scene}`,
      method: 'get',
      success: (res) => {
        console.log('res data:', res.data);
        if (res.data.game.status !== 'end') {
          console.log(res);
          getApp().globalData.players = res.data.players;
          getApp().globalData.numberOfRounds = res.data.game.round_number;
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
            url: 'wss://babble.wogengapp.cn/cable',
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
          listenSocket(page);
          wx.reLaunch({
            url: '/pages/player_home_page/player_home_page',
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
};

export default switching;
