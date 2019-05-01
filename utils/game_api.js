const app = getApp();
let globalData = app.globalData;
let g = globalData || {};
let gameTime = g.gameTime || [];
let gameTimeIndices = g.gameTimeIndices || [];

const createGame = function (page) {
  var value = wx.getStorageSync('token')
  if (value) {
    console.log("create game check data", page);
    wx.request({
      url: `http://localhost:3000/api/v1/game`,
      method: 'POST',
      data: {
        "tokens": {
          "token": value
        },
        "game": {
          "rounds": page.detail.value.round_number,
          "find_partner_timer": page.detail.value.find_partner_timer,
          "selfie_timer": page.detail.value.selfie_timer,
          "question_timer": page.detail.value.question_timer
        },
      },
      // success: res => {
      //   wx.redirectTo({
      //     url: '../index/index',
      //   })
      // }
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