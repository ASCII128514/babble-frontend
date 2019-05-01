Page({
  onLoad() {
    this.ctx = wx.createCameraContext()

    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    })

    wx.setNavigationBarTitle({
      title: 'Selfie time',
    })
  },

  startBabble: function () {
    wx.navigateTo({
      url: '/pages/find_partner/find_partner'
    })
  },

  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },

  error(e) {
    console.log(e.detail)
  }
})