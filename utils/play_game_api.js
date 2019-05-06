const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound

const increaseGameRound = function () {
  if (currentGameRound < numberOfRounds) {
    currentGameRound = currentGameRound + 1 
    getApp().globalData.currentGameRound = currentGameRound
  } else {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  }
}

export {
  increaseGameRound
}