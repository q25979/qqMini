<view class="grid">
    <view
        bindtap="gridTap"
        data-path="{{item.path}}"
        class="grid-item"
        qq:for="{{gridList}}"
        qq:key="unique">
        <image src="{{item.icon}}"></image>
        <view>{{item.text}}</view>
    </view>
</view>
