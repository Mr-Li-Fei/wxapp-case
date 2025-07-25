// pages/stories/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    story_desc:null,
    current_video: null,
    current_video_id: null
  },

  startPlay(event) {
    if (this.data.current_video !== null) {
      this.data.current_video.pause();
    }
    const targetId = event.target.dataset.vid;
    const current_video = wx.createVideoContext(`${targetId}`);
    console.log(current_video, targetId);
    current_video.play();
    this.setData({
      currebt_video_id: event.target.dataset.vid,
      current_video: current_video,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const data = app.globalData.stories;
    this.setData({
      story_desc: data
    });
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