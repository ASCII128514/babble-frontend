// pages/creation/creation.js
import { createGame } from '../../utils/game_api.js';

Page({

  formSubmit: function (e) {
    // verifyInteger
    // if successful, navigate to
    // if unsuccessful, show error message 
    // write verifyInteger in game_api. in this file call verifyInteger and if x, then y
    
    var userInput;
    var errorMessage;
    
    
    var partnerTimer = e.detail.value.find_partner_timer;
    console.log("User Input:", partnerTimer);

    if (isNaN(partnerTimer) || userInput < 1) {
      errorMessage = "Please enter a valid number";
      console.log(errorMessage);
    }
    console.log(document.getElementById("demo"));

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