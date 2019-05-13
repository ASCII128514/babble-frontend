// pages/take_selfie_2/take_selfie_2.js
import { sendPictureToBackend } from '../../utils/create_game_api';

const app = getApp();
const AV = require('../../utils/av-webapp-min.js');

Page({
  onLoad() {
    this.setData({
      previewSelfie: app.globalData.previewSelfie,
    });

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Review your picture',
    });
  },

  goBack() {
    wx.navigateTo({
      url: '/pages/take_selfie/take_selfie',
    });
  },

  savePic() {
    wx.showLoading({
      title: 'creating',
    });
    console.log('selfie', app.globalData.previewSelfie);
    new AV.File('file-name', {
      blob: {
        uri: app.globalData.previewSelfie,
      },
    })
      .save()
      .then((file) => {
        console.log('save pic', file.url());
        sendPictureToBackend(file.url());
      })
      .then(() => {
        wx.hideLoading();
        wx.reLaunch({
          url: '/pages/room/room',
        });
      })
      .catch(console.error);
  },
});
