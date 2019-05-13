const increaseGameRound = () => {
  let { currentGameRound } = getApp().globalData;
  const { numberOfRounds } = getApp().globalData;
  if (currentGameRound < numberOfRounds) {
    currentGameRound += 1;
    getApp().globalData.currentGameRound = currentGameRound;
  } else {
    wx.redirectTo({
      url: '/pages/index/index',
    });
  }
};

export default {
  increaseGameRound,
};
