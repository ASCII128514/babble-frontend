const switching = function (query, page) {
  // check whether the user already have a game stored in his storage before everything else
  // make request to the api to check whether the game is ended
  // set the scene to that room if it is not expired
  // clear it if the room is expired.
  let scene = null;
  var storageRoom = wx.getStorageSync('room')

  if (storageRoom) {
    // make api call to check whether the room is expired
    scene = storageRoom
    page.setData({
      modalHidden: false
    })
    console.log("this is running")
  }
  console.log(scene)

  // console.log(typeof query.scene);
  console.log(query)
  if (typeof query.scene === 'undefined' && scene === null) {
    wx.reLaunch({
      url: '/pages/index/index',
    })
    return
  }
  if (typeof query.scene === "string") {
    console.log("query:", query);
    scene = decodeURIComponent(query.scene);
  }
  console.log("scene", scene);
  getApp().globalData.qrCodeData = scene;
  console.log(scene !== "undefined");
  console.log(scene !== null);
  console.log("in redirect")
  console.log(scene)
  if (scene !== null && scene !== "undefined") {
    wx.setStorageSync('room', scene);
    console.log('set storage')
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${scene}`,
      method: "get",
      success: res => {
        console.log("res data:", res.data);
        if (res.data.game.status !== "end") {
          console.log(res)
          getApp().globalData.players = res.data.players;
          getApp().globalData.numberOfRounds = res.data.game.round_number;
          var x = res.data.game.find_partner_timer % 60
          if (x === 0) {
            x = '00'
          } else {
            x = `${x}`
          }
          getApp().globalData.gameTimeIndices.partnerTime.seconds = x
          var m = Number.parseInt(res.data.game.find_partner_timer / 60)
          getApp().globalData.gameTimeIndices.partnerTime.minutes = m
          console.log('mintue', m)
          var y = res.data.game.question_timer % 60
          if (y === 0) {
            y = '00'
          } else {
            y = `${y}`
          }
          getApp().globalData.gameTimeIndices.questionTime.seconds = y
          var j = Number.parseInt(res.data.game.question_timer / 60)
          getApp().globalData.gameTimeIndices.questionTime.minutes = j
          console.log('mintue', getApp().globalData.gameTimeIndices.questionTime.minutes)

          const response = res;
          wx.connectSocket({
            url: "wss://babble.wogengapp.cn/cable",
            header: {
              "content-type": "application/json",
            },
          });
          wx.onSocketOpen(function (res) {
            const id = JSON.stringify({
              channel: "GameChannel",
              room: response.data.game.id,
              token: wx.getStorageSync("token"),
            });
            wx.sendSocketMessage({
              data: JSON.stringify({
                command: "subscribe",
                identifier: id,
                // data: data
              }),
            });
          });
          wx.onSocketMessage(function (res) {
            const value = JSON.parse(res.data);

            if (
              value.type != "ping" &&
              value.type != "welcome" &&
              value.type != "confirm_subscription"
            ) {
              if (value.message.type == "users") {
                console.log("players:", value.message.players);
                getApp().globalData.playerList = value.message.players;
              } else if (value.message.type == "pairs") {
                console.log("save that pair shit");
              }
            }
          });
          wx.reLaunch({
            url: "/pages/player_home_page/player_home_page",
          });
        } else {
          // clear the phone's storage
          wx.setStorageSync('room', null);
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      }
    });
  } else {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
};

export {
  switching
}