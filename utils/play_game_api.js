const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound

// function to play game - where should we call this?
const playGame = function () {
  for (let i = 0; i <= numberOfRounds; i++) {
    g.setData({
      currentGameRound: i
    })
    getGameData();
    gameLogic();
  }
}

const getGameData = function () {
  var value = wx.getStorageSync('token')
  if (value) {
    // send token & round number
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game`,
      method: 'POST',
      data: {
        tokens: {
          token: value
        },
        game: {
          current_game_round: currentGameRound,
        }
      },
      // receive user match and question 
      success: res => {
        console.log(res)
        let playerPair = res.data.pair
        getApp().globalData.playerPair = playerPair

        let gameQuestion = res.data.question
        getApp().globalData.gameQuestion = gameQuestion
      }
    })
  }
}

const gameLogic = function () {
  // navigate to partner page (this should update due to globalData update?)
  wx.navigateTo({
    url: '/pages/timer_find_partner/timer_find_partner'
  })
  
  // start timer by calling timer method with partner_find time parameters (set by user)
  
  // if players find each other and press "play" button, go to question page, add up timers, display new timer for Q
  if (BINDTAPEVENT == true) {
    wx.navigateTo({
      url: '/pages/timer_question/timer_question'
    })
    // call method to add up timers (remaining time from find_partner plus full time for question)
    // call method to start new timer 
  } else if (partner_timer == 0) {
    wx.navigateTo({
      url: '/pages/timer_question/timer_question'
    })
    // call method to start timer with question setting parameters 
  }
}

export {
  getGameData,
  gameLogic
}