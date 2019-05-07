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

  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    })

    wx.setNavigationBarTitle({
      title: 'BABBLERS',
    })

    this.setData({
      name: app.globalData.currentUser.name
    })
  },
})