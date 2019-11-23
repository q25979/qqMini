// 九宫格布局

Component({
  properties: {
    gridList: {
      type: Array,
      value: [{
        icon: '/img/home_1.png',
        text: '精华',
        path: '/pages/index/index'
      }, {
        icon: '/img/home_2.png',
        text: '口红',
        path: '/pages/index/index'
      }, {
        icon: '/img/home_3.png',
        text: '眉刀',
        path: '/pages/index/index'
      }, {
        icon: '/img/home_4.png',
        text: '美容仪',
        path: '/pages/index/index'
      }, {
        icon: '/img/home_5.png',
        text: '面膜',
        path: '/pages/index/index'
      }, {
        icon: '/img/home_6.png',
        text: '粉扑',
        path: '/pages/index/index'
      }]
    }
  },
  data: {
  },
  methods: {
    // 九宫格点击
    gridTap (ev) {
      this.triggerEvent('gridEvnent', ev)
    }
  }
})
