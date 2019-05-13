Page({
  data: {
    babbleheads: [
    ],
    babbleheadImages: [
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/2df599644978ef05bbb4/paul.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/601206fc75b9ac5f0317/brooke.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/8cf6c87242ab68710a3b/Zozo.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/0bed6cecabaed2d1e68d/James.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/66567efdfa9d54c9253f/Sijun.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/01c62f3fb8d9d52273da/Carly.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/79711c9a221281038fed/Dave.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/0f35aeebcf32ed3822e4/Fredly.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/a0b89e5e4cfbbd440c9e/MareBear.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/67d5fe26708f5092ec43/Mira.png',
      'https://lc-qaxmtbr0.cn-n1.lcfile.com/f3f460b2726d2b357636/Wowo.png',
    ],
    windowWidth: 0,
  },
  goToNextPage() {
    wx.navigateTo({
      url: '/pages/player_index/player_index',
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

    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
        });
      },
    });
  },


  onReady() {
    this.createBabbleheads();
    setInterval(this.gameLoop, 50);
  },


  getRandomInt(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  },


  generateBabbleHead() {
    return {
      x: this.data.windowWidth / 2,
      y: this.data.windowHeight / 2,
      image: this.data.babbleheadImages[this.getRandomInt(0, this.data.babbleheadImages.length)],
      xVelocity: this.getRandomInt(-5, 5),
      yVelocity: this.getRandomInt(-5, 5),
      radius: this.getRandomInt(40, 150),
    };
  },

  createBabbleheads() {
    const babbleheads = [];

    for (let i = 0; i < 20; i += 1) {
      let babblehead = {
        x: this.data.windowWidth / 2,
        y: this.data.windowHeight / 2,
        image: this.data.babbleheadImages[this.getRandomInt(0, this.data.babbleheadImages.length)],
        xVelocity: this.getRandomInt(-5, 5),
        yVelocity: this.getRandomInt(-5, 5),
        radius: this.getRandomInt(40, 100),
      };

      if (babblehead.xVelocity + babblehead.yVelocity === 0) {
        babblehead = this.generateBabbleHead();
      }
      babbleheads.push(babblehead);
    }

    this.setData({ babbleheads });
  },


  gameLoop() {
    const { babbleheads } = this.data;
    for (let i = 0; i < babbleheads.length; i += 1) {
      babbleheads[i].x += babbleheads[i].xVelocity;
      babbleheads[i].y += babbleheads[i].yVelocity;

      if (babbleheads[i].x >= (this.data.windowWidth - babbleheads[i].radius)
      || babbleheads[i].x <= 0) {
        babbleheads[i].xVelocity = -babbleheads[i].xVelocity;
      }
      if (babbleheads[i].y <= 0
      || babbleheads[i].y >= (this.data.windowHeight - babbleheads[i].radius)) {
        babbleheads[i].yVelocity = -babbleheads[i].yVelocity;
      }
    }

    this.setData({
      babbleheads,
    });
  },
});
