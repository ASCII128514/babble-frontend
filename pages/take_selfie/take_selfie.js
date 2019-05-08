const app = getApp();
let globalData = app.globalData;
let previewSelfie = globalData.previewSelfie;

Page({
  onLoad() {
    this.ctx = wx.createCameraContext()

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#A7C3EC',
    })

    wx.setNavigationBarTitle({
      title: 'Selfie time',
    })

    console.log(getApp());
  },

  startBabble: function () {
    wx.navigateTo({
      url: '/pages/find_partner/find_partner'
    })
  },

  takePhoto: function() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        // this.setData({
        //   src: res.tempImagePath
        // })
        let previewSelfie = res.tempImagePath
        getApp().globalData.previewSelfie = previewSelfie
        console.log("check gd", getApp());
        wx.navigateTo({
          url: '/pages/take_selfie_2/take_selfie_2'
        })
      }
    })
  },


  error(e) {
    console.log(e.detail)
  }
})