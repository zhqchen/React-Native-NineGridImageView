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
        pictures[0] = 'http://192.168.1.49/microblog/filesvr/56f889cee4b04c72e1c87cd2?w314';
        pictures[1] = 'http://192.168.1.49/microblog/filesvr/56f889cee4b04c72e1c87cda?w314';
        pictures[2] = 'http://192.168.1.49/microblog/filesvr/56f889cee4b04c72e1c87cec?w314';
        pictures[3] = 'http://192.168.1.49/microblog/filesvr/56f4ddcfe4b0ef7dcb5f5f12?w314';
        pictures[4] = 'http://192.168.1.49/microblog/filesvr/56f4ddcfe4b0ef7dcb5f5f12?w314';
        return (
            <NineGridImageView
                pictures={pictures}
            />
        );
    }
});


AppRegistry.registerComponent('NineGridImageView', () => NineGridImageViewExample);
