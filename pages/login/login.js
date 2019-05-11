// pages/login/login.js
import {
  switching
} from '../../utils/redirect.js'

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
  onLoad: function (query) {
    this.setData({
      query: query
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#A7C3EC',
    })

    wx.setNavigationBarTitle({
      title: 'Welcome',
    })
    var page = this
    var app = getApp()
    console.log(wx.getStorageSync("token"));
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    wx.login({
      success: res => {
        // check if user has logged-in before
        var value = wx.getStorageSync("token");
        if (value) {
          console.log("logged in as existing user");
          wx.request({
            url: "https://babble.wogengapp.cn/api/v1/login",
            method: "POST",
            data: {
              tokens: {
                token: value,
              },
            },
            success: res => {
              console.log(res.data.currentUser)
              app.globalData.currentUser = res.data.currentUser
              const token = res.data;
              console.log("this is in the call back")
              var storageRoom = wx.getStorageSync('room')
              if (typeof query.scene === 'undefined' && storageRoom) {
                // make api call to check whether the room is expired
                console.log("this is running in 60")
                page.setData({
                  modalHidden: false
                })
              } else {
                console.log('65')
                switching(query, page)
              }

            },
          });
        } else {
          //Initiate network request to backend
          wx.request({
            url: "https://babble.wogengapp.cn/api/v1/login",
            method: "POST",
            header: {
              "content-type": "application/json", // 默认值
            },
            data: {
              code: res.code,
            },
            success: token => {
              console.log(token.data.authen);
              wx.setStorage({
                key: "token",
                data: token.data.authen,
                success: () => {
                  app.globalData.currentUser = token.data.currentUser
                  console.log("new user success");
                  var storageRoom = wx.getStorageSync('room')
                  if (typeof query.scene === 'undefined' && storageRoom ) {
                    // make api call to check whether the room is expired
                    page.setData({
                      modalHidden: false
                    })
                  } else {
                    switching(query, page)
                  }

                },
              });
            },
          });
        }
      },
    });
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
          });
        }
      },
    });
  },


  modalConfirm: function () {
    var page = this
    this.setData({
      modalHidden: true
    })
    switching(page.data.query, page)
  },

  modalCandel: function () {
    var page = this
    this.setData({
      modalHidden: true
    })
    wx.setStorageSync('room', null);
    switching(page.data.query, page)
  },
})