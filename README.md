# React-Native-NineGridImageView
A component of nine grid view to show pictures like GridView on Android. It can 

 ![image](https://github.com/zhqchen/React-Native-NineGridImageView/raw/master/screenshot/result.png)

##  How to run 
1. Prepare your environment: https://facebook.github.io/react-native/docs/getting-started.html#quick-start
2. Clone this repo, and go to the project's root directory
3. run npm install
4. run react-native run-android

## props of NineGridImageView
```
pictures: 数组型, 图片地址数组
picSpacing: 整型, 各图片之间的间距
showAreaWidth: 整型, 整个展示区域的宽度, 默认为屏幕宽度
```

## example usage
```
var NineGridImageView = require('./NineGridImageView');
var NineGridImageViewExample = React.createClass({
    render() {
        var pictures = [];
        pictures[0] = 'http://ww1.sinaimg.cn/or360/71d82871jw1f2ai3x20nbj209g0badhn.jpg';
        pictures[1] = 'http://ww2.sinaimg.cn/or360/71d82871jw1f2ai43m54dj209l0b9mzb.jpg';
        pictures[2] = 'http://ww3.sinaimg.cn/or360/71d82871jw1f2ai441kq4j209i0bdmzf.jpg';
        pictures[3] = 'http://ww4.sinaimg.cn/or360/71d82871jw1f2ai44gxbtj209p0bewgf.jpg';
        pictures[4] = 'http://ww4.sinaimg.cn/or360/71d82871jw1f2ai4530xjj209g0b8q4h.jpg';
        pictures[5] = 'http://ww2.sinaimg.cn/or360/71d82871jw1f2ai45lfkij209n0bhwgb.jpg';
        pictures[6] = 'http://ww2.sinaimg.cn/or360/71d82871jw1f2ai46oayfj209o0b7wg5.jpg';
        pictures[7] = 'http://ww4.sinaimg.cn/or360/71d82871jw1f2ai47d62ij209j0begnv.jpg';
        pictures[8] = 'http://ww2.sinaimg.cn/or360/71d82871jw1f2ai9byl65j209j0f20wl.jpg';
        return (
            <NineGridImageView
                pictures={pictures}
            />
        );
    }
});
```
