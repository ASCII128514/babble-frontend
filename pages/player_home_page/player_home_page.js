Page({
  data: {
    babbleheads: [
    ],
    babbleheadImages: [
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/2df599644978ef05bbb4/paul.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/601206fc75b9ac5f0317/brooke.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/8cf6c87242ab68710a3b/Zozo.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/0bed6cecabaed2d1e68d/James.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/66567efdfa9d54c9253f/Sijun.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/01c62f3fb8d9d52273da/Carly.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/79711c9a221281038fed/Dave.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/0f35aeebcf32ed3822e4/Fredly.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/a0b89e5e4cfbbd440c9e/MareBear.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/67d5fe26708f5092ec43/Mira.png",
      "http://lc-qaxmtbr0.cn-n1.lcfile.com/f3f460b2726d2b357636/Wowo.png"
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
        this.setData({windowWidth: res.windowWidth});
      }
    });
  },




  onReady: function (e) {
    this.createBabbleheads();

    
    setInterval(this.gameLoop, 50);
    
  },


  getRandomInt: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },





  createBabbleheads: function() {
    let babbleheads = [];

    for(let i = 0; i < 30; i++) {
      let babblehead = {
        x: this.getRandomInt(-700, 700),
        y: this.getRandomInt(0, 700),
        image: this.data.babbleheadImages[this.getRandomInt(0, this.data.babbleheadImages.length)],
        velocity: this.getRandomInt(1, 5),
        radius: this.getRandomInt(50, 75)
      };
    
      babbleheads.push(babblehead);
    }

    this.setData({babbleheads: babbleheads});
  },





  gameLoop: function() {
    console.log(this.data.babbleheads.length);
    const ctx = wx.createCanvasContext('babbleheadCanvas');

    ctx.clearRect(0, 0, 500, 1000);

    for(let i = 0; i < this.data.babbleheads.length; i++) {
      let babblehead = this.data.babbleheads[i];
      babblehead["x"] = babblehead["x"] + babblehead["velocity"];

      if(babblehead["x"] > this.data.windowWidth) {
        babblehead["dead"] = true;
      }
      ctx.drawImage(babblehead["image"], babblehead["x"], babblehead["y"], babblehead["radius"], babblehead["radius"]);

    }

  for (let i = 0; i < this.data.babbleheads.length; i++) {
    let babblehead = this.data.babbleheads[i];
    if (babblehead["dead"]) {
      babblehead["x"] = this.getRandomInt(-700, -150);
      babblehead["y"] = this.getRandomInt(0, 700);
      babblehead["image"] = this.data.babbleheadImages[this.getRandomInt(0, this.data.babbleheadImages.length)];
      babblehead["dead"] = false;
      babblehead["radius"] = this.getRandomInt(40, 85);
    }
  }
    ctx.draw();
  },

  

})