// pages/entries/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entries: null,
  },
  onPreview(event) {
    const path = event.target.dataset.path;
    const index = event.target.dataset.index;
    const　data = this.data.entries.meta[path];
    let array = [];
    data.map((item) => {
      array.push(item.image);
    })
    console.log('run', array);
    wx.previewImage({
      urls: array,
      current: array[index],
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options, 'options');
    wx.setNavigationBarTitle({
      title: '揽胜星脉',
    })
    const targetData = app.globalData.vehicles.filter((item) => {
      console.log(options.id, item.id);
      return Number(item.id) === Number(options.id);
    })
    console.log(targetData);
    this.setData({
      entries: targetData[0],
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})