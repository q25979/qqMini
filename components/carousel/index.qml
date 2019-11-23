<swiper
    indicator-dots="{{dots}}"
    autoplay="{{autoplay}}"
    class="carousel">
    <swiper-item
        class="carousel-item"
        qq:key="unique"
        qq:for="{{itemList}}">
        <image src="{{item}}"></image>
    </swiper-item>
</swiper>
