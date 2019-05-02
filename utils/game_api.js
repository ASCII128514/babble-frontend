const createGame = function (page) {
  var value = wx.getStorageSync('token')
  console.log("create game test", value)
  if (value) {
    console.log("create game check data", page);
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game`,
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
      // success: res => {
      //   wx.redirectTo({
      //     url: '../index/index',
      //   })
      // }
    })
  }
}

const verifyInteger = function () {
  var userInput;
  var errorMessage;

  userInput = document.getElementById("numb").value;
  console.log("starting to verify");
  console.log("User Input", userInput);

  if (isNaN(userInput) || userInput < 1) {
    errorMessage = "Please enter a valid number";
    console.log(errorMessage);
  }
  document.getElementById("demo").innerHTML = errorMessage;
}

export { createGame };