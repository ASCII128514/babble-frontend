const app = getApp();
let globalData = app.globalData;
let g = globalData || {};
let gameTime = g.gameTime || [];
let gameTimeIndices = g.gameTimeIndices || [];
let numberOfRounds = g.numberOfRounds;

const createGame = function (page) {
  var value = wx.getStorageSync('token')
  if (value) {
    console.log("start creating data with:");
    console.log("1:", gameTimeIndices.partnerTime);
    console.log("2:", gameTimeIndices.questionTime);
    console.log("3:", gameTimeIndices.selfieTime);
    console.log("4:", numberOfRounds);
    wx.request({
      url: `http://babble.wogengapp.cn/api/v1/game`,
      method: 'POST',
      data: {
        "tokens": {
          "token": value
        },
        "game": {
          "round_number": numberOfRounds,
          "find_partner_timer": gameTimeIndices.partnerTime,
          "selfie_timer": gameTimeIndices.selfieTime,
          "question_timer": gameTimeIndices.questionTime
        },
      },
      success: res => {
        console.log("sent game data");
        console.log("results:", res.data);
        // const products = res.data["user"];
      }
    })
  }
}

const setTime = function (e, f, gameTimeIndex) {
  let defineTimeIndex = gameTimeIndex + "Time"
  
  let arrayOfMinutes = gameTime.minute_possibilities
  let minute = Number.parseInt(arrayOfMinutes[e.detail.value[0]], 10);

  let arrayOfSeconds = gameTime.second_possibilities
  let second = Number.parseInt(arrayOfSeconds[e.detail.value[1]], 10);

  app.globalData.gameTimeIndices[defineTimeIndex].minutes = minute
  app.globalData.gameTimeIndices[defineTimeIndex].seconds = second

  const gameTimeIndices = app.globalData.gameTimeIndices

  f.setData({
    gameTimeIndices
  })
}

export { createGame, setTime };