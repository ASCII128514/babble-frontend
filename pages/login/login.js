// pages/login/login.js
import switching from '../../utils/redirect';
// const switching = require('../../utils/redirect');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(query) {
    this.setData({
      query,
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#A7C3EC',
    });

    wx.setNavigationBarTitle({
      title: 'Welcome',
    });
    const page = this;
    const app = getApp();
    console.log(wx.getStorageSync('token'));

    wx.login({
      success: (res) => {
        // check if user has logged-in before
        const value = wx.getStorageSync('token');
        if (value) {
          console.log('logged in as existing user');
          wx.request({
            url: 'http://localhost:3000/api/v1/login',
            method: 'POST',
            data: {
              tokens: {
                token: value,
              },
            },
            success: (respond) => {
              console.log(respond.data.currentUser);
              app.globalData.currentUser = respond.data.currentUser;
              console.log('this is in the call back');
              const storageRoom = wx.getStorageSync('room');
              if (typeof query.scene === 'undefined' && storageRoom) {
                // make api call to check whether the room is expired
                console.log('this is running in 60');
                page.setData({
                  modalHidden: false,
                });
              } else {
                console.log('65');
                switching(query, page);
              }
            },
          });
        } else {
          // Initiate network request to backend
          wx.request({
            url: 'http://localhost:3000/api/v1/login',
            method: 'POST',
            header: {
              'content-type': 'application/json', // 默认值
            },
            data: {
              code: res.code,
            },
            success: (token) => {
              console.log(token.data.authen);
              wx.setStorage({
                key: 'token',
                data: token.data.authen,
                success: () => {
                  app.globalData.currentUser = token.data.currentUser;
                  console.log('new user success');
                  const storageRoom = wx.getStorageSync('room');
                  if (typeof query.scene === 'undefined' && storageRoom) {
                    // make api call to check whether the room is expired
                    page.setData({
                      modalHidden: false,
                    });
                  } else {
                    switching(query, page);
                  }
                },
              });
            },
          });
        }
      },
    });
  },


  modalConfirm() {
    const page = this;
    this.setData({
      modalHidden: true,
    });
    switching(page.data.query, page);
  },

  modalCandel() {
    const page = this;
    this.setData({
      modalHidden: true,
    });
    wx.setStorageSync('room', null);
    switching(page.data.query, page);
  },
});
