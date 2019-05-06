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

const gameTimer = function (totalSeconds, whichTimer, targetPage) {
  // Set the date we're counting down to
  let timerEndTime = totalSeconds[whichTimer] * 1000
  
  var countDownTime = new Date().getTime() + timerEndTime;

    // Update the count down every 1 second
  var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownTime - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text 
    if (distance <= 0) {
      clearInterval(x);
      console.log("timer over");
    }

    // Display the result in the element with id="demo"
    var countdown = minutes + "m " + seconds + "s ";
    getApp().globalData.countdown = countdown
  }, 1000);
}

export {
  increaseGameRound,
  gameTimer
}