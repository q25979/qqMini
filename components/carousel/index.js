// 轮播图

Component({
  properties: {
    // 自动切换
    autoplay: {
      type: Boolean,
      value: true
    },
    dots: {
      type: Boolean,
      value: true
    },
    itemList: {
      type: Object,
      value: [
        'https://img.52z.com/upload/news/image/20180621/20180621055734_59936.jpg',
        'http://img1.imgtn.bdimg.com/it/u=4085635441,2851641232&fm=26&gp=0.jpg',
        'https://b-ssl.duitang.com/uploads/blog/201312/04/20131204184148_hhXUT.jpeg'
      ]
    }
  },
  data: {
  },
  methods: {
  }
})
