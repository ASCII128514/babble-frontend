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
      }
    }
  });
};

export default listenSocket;
