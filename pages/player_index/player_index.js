// pages/player_index/player_index.js
const app = getApp()

import { sendNameToBackend } from '../../utils/create_game_api.js';

Page({
  data: {

  },
  nameSubmit: function (e) {
    sendNameToBackend(e);
    wx.navigateTo({
      url: '/pages/take_selfie/take_selfie'
    })
  },

  toInstruction: function () {
    wx.navigateTo({
      url: '/pages/instruction_p/instruction_p'
    })
  },

  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    })

    wx.setNavigationBarTitle({
      title: 'Welcome',
    })
    this.setData({
      name: app.globalData.currentUser.name
    })    
  },
})
