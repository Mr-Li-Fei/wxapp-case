// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.createSelectorQuery()
      .select('#mycanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        console.log(res);
        // 获取canvas 节点
        const canvas = res[0].node;
        //渲染上下文
        const ctx = canvas.getContext('2d');
        //canvas 的实际绘制宽高
        const height = res[0].height;
        const width = res[0].width;
        // 获取设备的像素比
        const dpr = wx.getWindowInfo().pixelRatio;
        // 初始化画布大小
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);

        // 图片对象
        const image = canvas.createImage()
        // 图片加载完成回调
        image.onload = () => {
            // 将图片绘制到 canvas 上
            ctx.drawImage(image, 200, 80);
        }
        // 设置图片src
        image.src = 'https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png';

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