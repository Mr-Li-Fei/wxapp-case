// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowCamera: false,
    isHaveResult: false,
    images: [],
  },

  processScanResult(result) {
    /**
     * 扫码的三类结果：
     * 1. url
     * 2. 自定义业务
     * 3. 其他
    */
    if(result.startsWith('https://') || result.startsWith('http://')) {
      wx.showModal({
        title: '跳转链接',
        content: result,
        complete: (res) => {
          console.log(res.confirm, 'confirm2');
          if (res.cancel) {
            
          }
          if (res.confirm) {
            console.log(res.confirm, 'confirm');
            this.setData({
              isShowCamera: false,
              isHaveResult: false          
            })
            wx.navigateTo({
              url: `/pages/webview/webview?url=${encodeURIComponent(result)}`,
            })
          }
        }
      })
    }
  },

  openCamera() {
    wx.scanCode({
      success:(res) => {
        console.log(res, '扫码结果');
        const result = res.result;
        console.log(this, 'this');
        this.processScanResult(result);
      }
    });
  },

  openCamera1(e) {
    this.setData({
      isShowCamera:!this.data.isShowCamera
    })
  },

  scanCode(e) {
    console.log(e, 'target-camera');
    if(this.data.isHaveResult) return;
    this.setData({
      isHaveResult: true,
    })
    this.processScanResult(e.detail.result);
  },

  onClose() {
    this.setData({
      isShowCamera: false,
      isHaveResult: false  
    })
  },

  openAlbum() {
    wx.chooseMedia({
      count: 6,
      mediaType: ['mix'],
      sourceType: ['album', 'camera'],
      maxDuration: 10,
      camera: 'back',
      success: (res) => {
        console.log(res, '选择的照片');
        this.setData({
          images: res.tempFiles,
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSetting({
      success(res) {
        console.log(res);
      }
    });
    wx.openSetting({
      success(res) {
        console.log(res, 'open');
      }
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
    this.setData({
      isShowCamera: false,
      isHaveResult: false  
    })
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