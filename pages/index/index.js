const app = getApp()

Page({
  data: {
    loading: true
  },
  onLoad() {
    // 模拟异步请求5秒后销毁组件
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 5000)
  },
  onClick() {
    this.setData({
      loading: true
    }, () => {
      setTimeout(() => {
        this.setData({
          loading: false
        })
      }, 3000)
    })
  }
})
