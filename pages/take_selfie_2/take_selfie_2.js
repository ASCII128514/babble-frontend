// pages/take_selfie_2/take_selfie_2.js
import { sendPictureToBackend } from '../../utils/create_game_api.js'

let app = getApp()
const AV = require('../../utils/av-webapp-min.js')

Page({
  /**
   * Page initial data
   */
  data: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      previewSelfie: app.globalData.previewSelfie
    })

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    })

    wx.setNavigationBarTitle({
      title: 'Review your picture'
    })
  },

  goBack: function () {
    wx.navigateTo({
      url: '/pages/take_selfie/take_selfie'
    })
  },

  savePic: function () {
    console.log('selfie', app.globalData.previewSelfie)
    new AV.File('file-name', {
      blob: {
        uri: app.globalData.previewSelfie
      }
    })
      .save()
      .then(file => {
        console.log('save pic', file.url())
        sendPictureToBackend(file.url())
      })
      .then(res => {
        wx.reLaunch({
          url: '/pages/room/room'
        })
      })
      .catch(console.error)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {}
})
