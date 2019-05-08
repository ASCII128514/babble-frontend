const switching = function (query) {
  let scene = null;
  // console.log(typeof query.scene);
  console.log(query)
  if (typeof query.scene === 'undefined') {
    wx.reLaunch({
      url: '/pages/index/index',
    })
    return
  }
  if (typeof query.scene !== "undefined" || typeof query.scene !== "string" ) {
    console.log("query:", query);
    scene = decodeURIComponent(query.scene);
  } else {
    scene = query.scene;
  }
  console.log("scene", scene);
  getApp().globalData.qrCodeData = scene;
  console.log(scene !== "undefined");
  console.log(scene !== null);
  console.log("in redirect")
  if (scene !== null && scene !== "undefined") {
    wx.request({
      url: `https://babble.wogengapp.cn/api/v1/game/${scene}`,
      method: "get",
      success: res => {
        console.log("res data:", res.data);
        if (res.data.game.status !== "end") {
          getApp().globalData.players = res.players;
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
            url: "/pages/player_index/player_index",
          });
        } else {
          wx.reLaunch({
            url: '/pages/index/index',
          })
        }
      },
    });
  }
};

export {
  switching
}