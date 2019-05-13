// pages/player_index/player_index.js
import { sendNameToBackend } from '../../utils/create_game_api';

const app = getApp();

Page({
  data: {
    modalHidden: true,
  },

  nameSubmit(e) {
    const patt = new RegExp(/^(.{1,10}\w)$/);
    const verification = patt.test(e.detail.value.name);
    console.log('verified?', verification);

    if (verification === false) {
      this.setData({
        modalHidden: false,
      });
    } else if (verification === true) {
      sendNameToBackend(e);
      wx.navigateTo({
        url: '/pages/take_selfie/take_selfie',
      });
    }
  },

  modalCancel() {
    this.setData({
      modalHidden: true,
    });
  },

  modalConfirm() {
    this.setData({
      modalHidden: true,
    });
  },

  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Welcome',
    });
    this.setData({
      name: app.globalData.currentUser.name,
    });
  },

});
