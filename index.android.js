/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
    AppRegistry,
    } = React;

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

AppRegistry.registerComponent('NineGridImageView', () => NineGridImageViewExample);
