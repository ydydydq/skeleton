Component({
  properties: {
    isShow: { // 是否展示
      type: Boolean,
      value: true
    },
    bgColor: { // 骨架屏背景, 默认为白色
      type: String,
      value: '#fff'
    },
    selects: { // 添加在页面根元素类名
      type: String,
      value: 'skeleton'
    }
  },
  data: {
    skeletonRect: [], // 方形列表
    skeletonArc: [], // 圆形列表
  },
  ready () {
    this._fillRect()
    this._fillCircle()
  },
  methods: {
    // 绘制方形
    _fillRect () {
      // 获取页面相关节点, 使用跨组件的后代选择器(>>>), 注意if和hidden的拿不到
      wx.createSelectorQuery()
        .selectAll(`.${this.data.selects} >>> .${this.data.selects}-rect`)
        .boundingClientRect(rect => {
          console.log(rect)
        this.setData({
          skeletonRect: rect
        })
      }).exec()
    },
    // 绘制圆形
    _fillCircle () {
      wx.createSelectorQuery()
        .selectAll(`.${this.data.selects} >>> .${this.data.selects}-arc`)
        .boundingClientRect(rect => {
        this.setData({
          skeletonArc: rect
        })
      }).exec()
    }
  }
})
