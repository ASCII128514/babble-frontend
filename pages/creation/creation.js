// pages/creation/creation.js
import { createGame } from '../../utils/game_api.js';

Page({

  // styling for top bar
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    })

    wx.setNavigationBarTitle({
      title: 'BABBLE',
    })
  },
  // styling for top bar ends

  toStatus: function () {
    wx.navigateTo({
      url: '/pages/status_page/status_page'
    })
  },

  formSubmit: function (e) {
    // verifyInteger
    // if successful, navigate to
    // if unsuccessful, show error message 
    // write verifyInteger in game_api. in this file call verifyInteger and if x, then y
    var userInput;
    var errorMessage;
    
    userInput = e;
    console.log("User Input:", e);

    if (isNaN(userInput) || userInput < 1) {
      errorMessage = "Please enter a valid number";
      console.log(errorMessage);
    }
    // #.innerHTML = errorMessage;

    // wx.navigateTo({
    //   url: '/pages/status_page/status_page'
    // })
  },

  /**
   * Page initial data
   */
  data: {

  },

  // createGameSubmit: (e) => {
  //   createGame(e);
  // },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})