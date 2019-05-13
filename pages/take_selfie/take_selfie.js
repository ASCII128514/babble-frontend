Page({
  onLoad() {
    this.ctx = wx.createCameraContext();

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Selfie time',
    });

    console.log(getApp());
  },

  startBabble() {
    wx.navigateTo({
      url: '/pages/find_partner/find_partner',
    });
  },

  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        // this.setData({
        //   src: res.tempImagePath
        // })
        const previewSelfie = res.tempImagePath;
        getApp().globalData.previewSelfie = previewSelfie;
        console.log('check gd', getApp());
        wx.navigateTo({
          url: '/pages/take_selfie_2/take_selfie_2',
        });
      },
    });
  },

  error(e) {
    console.log(e.detail);
  },
});
