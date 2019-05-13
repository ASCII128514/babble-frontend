// pages/creation/creation.js
import { createGame, setTime, convertArrayToSeconds } from '../../utils/create_game_api';

const app = getApp();
const { globalData } = app;

Page({
  /**
   * Page initial data
   */
  data: {
    gameTime: {},
    gameTimeIndices: {},
    numberOfRounds: 5,
  },

  // styling for top bar
  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#aec6d9',
    });

    wx.setNavigationBarTitle({
      title: 'BABBLE',
    });

    // Copy arrays from globalData to data
    const { gameTime, gameTimeIndices, numberOfRounds } = globalData;
    this.setData({ gameTime, gameTimeIndices, numberOfRounds });
  },
  // styling for top bar ends

  toStatus: function () {
    let objectOfSeconds = convertArrayToSeconds();
    createGame(objectOfSeconds, this);
  },

  formSubmit: function () {

  },

  partnerMatchTimeAmount: function (e) {
    setTime(e, this, "partner");
  },

  questionTimeAmount: function (e) {
    setTime(e, this, "question");
  },

  selfieTimeAmount: function (e) {
    setTime(e, this, "selfie");
  },

  roundsSlider: function (e) {
    let numberOfRounds = e.detail.value
    this.setData({
      numberOfRounds
    })
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