const app = getApp();
Page({
  data: {
    slides: []
  },
  onLoad() {
    this.setData({slides: app.globalData.slides});
    console.log(app.globalData.slides, this.data.slides,'app');
  }
})