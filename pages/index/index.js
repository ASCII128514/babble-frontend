// index.js
// 获取应用实例

Page({
  buttonClicked() {
    wx.navigateTo({
      url: '/pages/instruction/instruction',
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
  },
});
