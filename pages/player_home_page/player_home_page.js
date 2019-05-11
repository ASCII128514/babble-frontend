Page({
  data: {
    babbleheads: [
    ],
    babbleheadImages: [
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/2df599644978ef05bbb4/paul.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/601206fc75b9ac5f0317/brooke.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/8cf6c87242ab68710a3b/Zozo.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/0bed6cecabaed2d1e68d/James.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/66567efdfa9d54c9253f/Sijun.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/01c62f3fb8d9d52273da/Carly.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/79711c9a221281038fed/Dave.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/0f35aeebcf32ed3822e4/Fredly.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/a0b89e5e4cfbbd440c9e/MareBear.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/67d5fe26708f5092ec43/Mira.png",
      "https://lc-qaxmtbr0.cn-n1.lcfile.com/f3f460b2726d2b357636/Wowo.png"
    ],
    windowWidth: 0
  },
  goToNextPage: function (e) {
    wx.navigateTo({
      url: '/pages/player_index/player_index'
    })
  },



  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5a97f1',
    });

    wx.setNavigationBarTitle({
      title: 'Welcome',
    });

    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,  
        });
      }
    });
  },




  onReady: function (e) {
    this.createBabbleheads();
    setInterval(this.gameLoop, 50)
  },


  getRandomInt: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },


  generateBabbleHead: function() {
    return {
      x: this.data.windowWidth / 2,
      y: this.data.windowHeight / 2,
      image: this.data.babbleheadImages[this.getRandomInt(0, this.data.babbleheadImages.length)],
      xVelocity: this.getRandomInt(-5, 5),
      yVelocity: this.getRandomInt(-5, 5),
      radius: this.getRandomInt(40, 150)
    };
  },

  createBabbleheads: function() {
    let babbleheads = [];

    for(let i = 0; i < 20; i++) {
      
      let babblehead = {
        x: this.data.windowWidth / 2,
        y: this.data.windowHeight / 2,
        image: this.data.babbleheadImages[this.getRandomInt(0, this.data.babbleheadImages.length)],
        xVelocity: this.getRandomInt(-5, 5),
        yVelocity: this.getRandomInt(-5, 5),
        radius: this.getRandomInt(40, 100)
      };

      if (babblehead.xVelocity + babblehead.yVelocity === 0) {
        babblehead = this.generateBabbleHead();
      }
    
      babbleheads.push(babblehead);
    }

    this.setData({babbleheads: babbleheads});
  },


  gameLoop: function() {
    const babbleheads = this.data.babbleheads;
    babbleheads.forEach((babblehead) => {
      // update position
      babblehead.x = babblehead.x + babblehead.xVelocity;
      babblehead.y = babblehead.y + babblehead.yVelocity;

      // 
      if (babblehead.x >= (this.data.windowWidth - babblehead.radius) || babblehead.x <= 0 ) {
        babblehead.xVelocity = - babblehead.xVelocity;
      }
      if (babblehead.y <= 0 || babblehead.y >= (this.data.windowHeight - babblehead.radius)) {
        babblehead.yVelocity = - babblehead.yVelocity;
      }
    });

    this.setData({
      babbleheads
    })
  }
})