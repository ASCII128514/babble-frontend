const app = getApp();

const createGame = (objectOfSeconds) => {
  const { numberOfRounds } = app.globalData;
  const value = wx.getStorageSync('token');
  console.log(numberOfRounds);
  if (value) {
    wx.showLoading({
      title: 'creating',
    });
    wx.request({
      url: 'http://localhost:3000/api/v1/game',
      method: 'POST',
      data: {
        tokens: {
          token: value,
        },
        game: {
          round_number: getApp().globalData.numberOfRounds,
          find_partner_timer: objectOfSeconds.find_partner_timer,
          selfie_timer: objectOfSeconds.selfie_timer,
          question_timer: objectOfSeconds.question_timer,
        },
      },
      success: (res) => {
        wx.hideLoading();
        const qrCodeUrl = res.data.url;
        getApp().globalData.qrCodeUrl = qrCodeUrl;
        getApp().globalData.roomId = res.data.room;
        // getApp().setGlobalData({
        //   qrCodeUrl
        // })
        wx.reLaunch({
          url: '/pages/QR_code/QR_code',
        });
      },
    });
  }
};

const convertArrayToSeconds = () => {
  const { gameTimeIndices } = app.globalData;
  const partnerTimeMinutes = gameTimeIndices.partnerTime.minutes;
  const partnerTimeUserInputSeconds = gameTimeIndices.partnerTime.seconds;
  const partnerTimeTotalSeconds = partnerTimeMinutes * 60
  + parseInt(partnerTimeUserInputSeconds, 10);

  const questionTimeMinutes = gameTimeIndices.questionTime.minutes;
  const questionTimeUserInputSeconds = gameTimeIndices.questionTime.seconds;
  const questionTimeTotalSeconds = questionTimeMinutes * 60
  + parseInt(questionTimeUserInputSeconds, 10);

  const selfieTimeMinutes = gameTimeIndices.selfieTime.minutes;
  const selfieTimeUserInputSeconds = gameTimeIndices.selfieTime.seconds;
  const selfieTimeTotalSeconds = selfieTimeMinutes * 60
    + parseInt(selfieTimeUserInputSeconds, 10);

  const settingsTotalSeconds = {
    find_partner_timer: partnerTimeTotalSeconds,
    selfie_timer: selfieTimeTotalSeconds,
    question_timer: questionTimeTotalSeconds,
  };

  return settingsTotalSeconds;
};

const setTime = (e, page, gameTimeIndex) => {
  const { gameTime } = app.globalData;
  const defineTimeIndex = `${gameTimeIndex} Time`;

  const arrayOfMinutes = gameTime.minute_possibilities;
  const minute = Number.parseInt(arrayOfMinutes[e.detail.value[0]], 10);

  const arrayOfSeconds = gameTime.second_possibilities;
  const second = Number.parseInt(arrayOfSeconds[e.detail.value[1]], 10);

  app.globalData.gameTimeIndices[defineTimeIndex].minutes = minute;
  app.globalData.gameTimeIndices[defineTimeIndex].seconds = second;

  const { gameTimeIndices } = app.globalData;

  page.setData({
    gameTimeIndices,
  });
};

const sendPictureToBackend = (url) => {
  const value = wx.getStorageSync('token');
  if (value) {
    wx.request({
      url: 'http://localhost:3000/api/v1/user/profile',
      method: 'PUT',
      data: {
        token: value,
        url,
      },
    });
  }
};

const sendNameToBackend = (userInput) => {
  const { name } = userInput.detail.value;
  const value = wx.getStorageSync('token');
  if (value) {
    wx.request({
      url: 'http://localhost:3000/api/v1/user/name',
      method: 'PUT',
      data: {
        token: value,
        name,
      },
      success: () => {
        console.log('this shit worked, yo!');
      },
    });
  }
};

export {
  createGame,
  setTime,
  convertArrayToSeconds,
  sendPictureToBackend,
  sendNameToBackend,
};
