const createGame = function (page) {
  var value = wx.getStorageSync('token')
  console.log("create game test", value)
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
          "rounds": page.detail.value.rounds,
          "find_partner_timer": page.detail.value.find_partner_timer,
          "selfie_timer": page.detail.value.selfie_timer,
          "question_timer": page.detail.value.question_timer
        },
      },
      success: res => {
        wx.redirectTo({
          url: '../index/index',
        })
      }
    })
  }
}

export { createGame };