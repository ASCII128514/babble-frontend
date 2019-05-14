const listenSocket = (page) => {
  wx.onSocketMessage((res) => {
    const value = JSON.parse(res.data);
    console.log('in room');
    if (value.type !== 'ping' && value.type !== 'welcome' && value.type !== 'confirm_subscription') {
      if (value.message.type === 'users') {
        console.log('players:', value.message.players);
        page.setData({
          playerList: value.message.players,
        });
        page.setData({
          numOfPeople: value.message.players.length,
        });
      } else if (value.message.type === 'pair') {
        getApp().globalData.pair = value.message.pairs[wx.getStorageSync('token')];
        getApp().globalData.currentGameRound = value.message.round;
        console.log(value.message.pairs);
        console.log(getApp().globalData.pair);
        console.log('question', getApp().globalData.pair.question);
        wx.redirectTo({
          url: '/pages/find_partner/find_partner',
        });
      } else if (value.message.type === 'finish') {
        wx.closeSocket();
        wx.setStorageSync('room', null);
        wx.reLaunch({
          url: '/pages/finished_game/finished_game',
        });
      } else if (value.message.type === 'start') {
        // make api call to another route to get the teammate
        console.log('recieve the start command');
        getApp().globalData.currentGameRound = value.message.round;
        console.log('in 33', value.message.round);
        wx.request({
          url: `https://babble.wogengapp.cn/api/v1/game/${wx.getStorageSync('room')}/findpair`,
          data: {
            token: wx.getStorageSync('token'),
            round: getApp().globalData.currentGameRound,
          },
          header: { 'content-type': 'application/json' },
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (result) => {
            console.log(result);
            getApp().globalData.pair = result.data.pair;
            wx.redirectTo({
              url: '/pages/find_partner/find_partner',
            });
          },
        });
      }
    }
  });
};

export default listenSocket;
