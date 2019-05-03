// test/test.js
Page({

  /**
   * Page initial data
   */
  data: {
    time: '00:59',
    size: ["small", "medium", "large"],
    multiArray: [['Invertebrate', 'Vertebrate'], ['Placozoa', 'Nematomorpha', 'Annelids', 'Molluscs', 'Arthropod'], ['Taenia solium', 'Schistosoma']],
    gameTime: [[0, 1, 2, 3], [0, 15, 30, 45]]
  },
  // this.data.time

  bindTimeChange: function (e) {
    console.log('pick the time', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindMultiPickerChange: function (e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('modified column is ', e.detail.column, '; the value is ', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['Placozoa', 'Nematomorpha', 'Annelids', 'Molluscs', 'Arthropod'];
            data.multiArray[2] = ['Taenia solium', 'Schistosoma'];
            break;
          case 1:
            data.multiArray[1] = ['Fish', 'Amphibians', 'Reptiles'];
            data.multiArray[2] = ['Squid', 'Trichiuridae'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['Taenia solium', 'Schistosoma'];
                break;
              case 1:
                data.multiArray[2] = ['Ascaris lumbricoides'];
                break;
              case 2:
                data.multiArray[2] = ['Ant', 'Leech'];
                break;
              case 3:
                data.multiArray[2] = ['Unionidae', 'Orthogastropoda', 'Limax'];
                break;
              case 4:
                data.multiArray[2] = ['Insecta', 'Crustacean', 'Arachnid', 'Myriapoda'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['Squid', 'Trichiuridae'];
                break;
              case 1:
                data.multiArray[2] = ['frog', 'giant salamander'];
                break;
              case 2:
                data.multiArray[2] = ['lizard', 'turtle', 'gecko'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

  // slider4change: function () {
  //   var pageData = {}
  //   for (var i = 1; i < 5; i++) {
  //     (function (index) {
  //       pageData['slider' + index + 'change'] = function (e) {
  //         console.log(if 'slider' + 'index' + 'change event occurs, the value brought is', e.detail.value)
  //   }
  //     })(i)
  //   }
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