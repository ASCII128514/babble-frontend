const app = getApp()
let globalData = app.globalData
let g = globalData || {}
let numberOfRounds = g.numberOfRounds
let currentGameRound = g.currentGameRound

// function to play game - where should we call this?
const increaseGameRound = function () {
  console.log("numberOfRounds", numberOfRounds);
  console.log("starting currentGameRound", currentGameRound);
  
  if (currentGameRound < numberOfRounds) {
    currentGameRound = currentGameRound + 1 
    getApp().globalData.currentGameRound = currentGameRound
    console.log("gameRound globalData", getApp().globalData.currentGameRound);    
  } else {
    console.log("game is over");
    wx.redirectTo({
      url: '/pages/index/index'
    })
  }
}


export {
  increaseGameRound
}