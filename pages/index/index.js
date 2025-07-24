const app = getApp();
Page({
  data: {
    slides: [],
    entries: null
  },
  bookDrive() {
    wx.showModal({
      title: '暂不支持',
    })
  },
  onMore(event) {
    console.log(event);
    wx.navigateTo({
      url: `/pages/entries/index?id=${event.target.dataset.id}`,
    })
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides,
      entries: app.globalData.vehicles,
    });
  }
})