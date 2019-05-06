const app = getApp();
let globalData = app.globalData;
let g = globalData || {};
let gameTime = g.gameTime || [];
let gameTimeIndices = g.gameTimeIndices || [];
let numberOfRounds = g.numberOfRounds;
let qrCodeUrl = g.qrCodeUrl;

const createGame = function (objectOfSeconds, page) {
  var value = wx.getStorageSync("token");
  if (value) {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game`,
      method: "POST",
      data: {
        tokens: {
          token: value,
        },
        game: {
          round_number: numberOfRounds,
          find_partner_timer: objectOfSeconds.find_partner_timer,
          selfie_timer: objectOfSeconds.selfie_timer,
          question_timer: objectOfSeconds.question_timer,
        },
      },
      success: res => {

        let qrCodeUrl = res.data.url
        // console.log(getApp())
        getApp().globalData.qrCodeUrl = qrCodeUrl
        // getApp().setGlobalData({
        //   qrCodeUrl
        // })
        wx.navigateTo({
          url: "/pages/QR_code/QR_code",
        });
      },
    });
  }
};

const convertArrayToSeconds = function () {
  let partnerTimeMinutes = gameTimeIndices.partnerTime.minutes;
  let partnerTimeUserInputSeconds = gameTimeIndices.partnerTime.seconds;
  let partnerTimeTotalSeconds =
    partnerTimeMinutes * 60 + parseInt(partnerTimeUserInputSeconds, 10);

  let questionTimeMinutes = gameTimeIndices.questionTime.minutes;
  let questionTimeUserInputSeconds = gameTimeIndices.questionTime.seconds;
  let questionTimeTotalSeconds =
    questionTimeMinutes * 60 + parseInt(questionTimeUserInputSeconds, 10);

  let selfieTimeMinutes = gameTimeIndices.selfieTime.minutes;
  let selfieTimeUserInputSeconds = gameTimeIndices.selfieTime.seconds;
  let selfieTimeTotalSeconds =
    selfieTimeMinutes * 60 + parseInt(selfieTimeUserInputSeconds, 10);

  const settingsTotalSeconds = {
    find_partner_timer: partnerTimeTotalSeconds,
    selfie_timer: selfieTimeTotalSeconds,
    question_timer: questionTimeTotalSeconds,
  };

  return settingsTotalSeconds;
};

const setTime = function (e, page, gameTimeIndex) {
  let defineTimeIndex = gameTimeIndex + "Time";

  let arrayOfMinutes = gameTime.minute_possibilities;
  let minute = Number.parseInt(arrayOfMinutes[e.detail.value[0]], 10);

  let arrayOfSeconds = gameTime.second_possibilities;
  let second = Number.parseInt(arrayOfSeconds[e.detail.value[1]], 10);

  app.globalData.gameTimeIndices[defineTimeIndex].minutes = minute;
  app.globalData.gameTimeIndices[defineTimeIndex].seconds = second;

  const gameTimeIndices = app.globalData.gameTimeIndices;

  page.setData({
    gameTimeIndices,
  });
};

export {
  createGame,
  setTime,
  convertArrayToSeconds
};