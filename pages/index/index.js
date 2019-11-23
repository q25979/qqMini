//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574514311787&di=fb3be2ad0e959a13c62e8313a0f64a6c&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130703%2F7447430_132327990000_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574514344473&di=44c6af4199c5488d230fbb10435fdfd4&imgtype=0&src=http%3A%2F%2Fpic7.nipic.com%2F20100610%2F4661545_160322085221_2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574514360600&di=0d526b15c1103d5a181d42570ee4439f&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F191014%2F1-1910141503170-L.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575109103&di=f1882d5a7360580a66e44daffc8bd2d2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F191029%2F30-191029140Z3246.jpg'
    ]
  },
  
  onLoad: function () {
  },

  // 九宫格事件
  gridEvnent: function (e) {
    console.log(e)
  }
})
