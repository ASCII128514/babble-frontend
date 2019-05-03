let socketOpen = false
let socketMsgQueue = []

wx.connectSocket({
  url: 'wss://babble.wogengapp.cn/cable',
  header: {
    'content-type': 'application/json'
  }
})

wx.onSocketOpen(function (res) {
  socketOpen = true
  const id = JSON.stringify({
    channel: "GameChannel"
  })
  wx.sendSocketMessage({
    data: JSON.stringify({
      command: 'subscribe',
      identifier: id,
      room: room_id
    })
  })
  for (let i = 0; i < socketMsgQueue.length; i++) {
    sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []
})

function sendSocketMessage(msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data: msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}
wx.onSocketMessage(function (res) {
  const value = JSON.parse(res.data)
  console.log(res)
  if (value.type != 'ping' && value.type != 'welcome') {
    console.log('hahaha', value)
  }

})

// const openRoom = function (page) {
//   var value = wx.getStorageSync('token')
//   if (value) {
//     wx.request({
//       url: `https://babble.wogengapp.cn/websocket`,
//       method: 'GET|POST',
//       data: {
//         "tokens": {
//           "token": value
//         }
//       room
//       },
//       success: res => {
//       }
//     })
//   }
// }

export {
  openRoom
};