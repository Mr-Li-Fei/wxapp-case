App({
  globalData: {},
  onLaunch() {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        Object.assign(this.globalData, response.data);
        console.log(this.globalData);
        // 由于api请求时异步， 可能存在数据还未返回的情况， 页面空白，
        // 目前没遇到空白页面的情况， 效果待验证
        const page = getCurrentPages(); // 获取当前页面的实例，可以调用页面的方法和数据
        if(page.length !== 0) {
          page[0].onLoad();
        }
      }
    })
  }
})