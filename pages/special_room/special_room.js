// pages/special_room/special_room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var scene = wx.getStorageSync('room')
    if (scene !== null && scene !== "undefined") {
      wx.setStorageSync('room', scene);
      console.log('set storage')
      wx.request({
        url: `https://babble.wogengapp.cn/api/v1/game/${scene}`,
        method: "get",
        success: res => {
          console.log("res data:", res.data);
          if (res.data.game.status !== "end") {
            getApp().globalData.players = res.players;

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
              url: "/pages/room/room",
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})