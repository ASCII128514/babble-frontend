// pages/player_index/player_index.js
const app = getApp()

import { sendNameToBackend } from '../../utils/create_game_api.js';

Page({
  data: {
    modalHidden: true,
  },

  nameSubmit: function (e) {
    var patt = new RegExp(/^(.{1,10}\w)$/);
    var verification = patt.test(e.detail.value.name);
    console.log("verified?", verification);

    if (verification == false) {
      this.setData ({
        modalHidden: false
      })


    } else if (verification == true) {
      sendNameToBackend(e); s
      wx.navigateTo({
        url: '/pages/take_selfie/take_selfie'
      })
    }    
  },

  modalCancel: function () {
    this.setData({
      modalHidden: true
    })

  },

  modalConfirm: function () {
    this.setData({
      modalHidden: true
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
      backgroundColor: '#A7C3EC',
    })

    wx.setNavigationBarTitle({
      title: 'Welcome',
    })
    this.setData({
      name: app.globalData.currentUser.name
    })    
  },

})
