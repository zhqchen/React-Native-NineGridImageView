/**
 * Created by chen on 16/3/28.
 */

'use strict';
var React = require('react-native');

var {
    ToastAndroid,
    StyleSheet,
    View,
    ListView,
    Dimensions,
    } = React;

var SingleImageView = require('./SingleImageView');

var MAX_MULTI_PICTURES = 9;

var NUM_COLUMNS = 3;

var DEFAULT_PIC_SPACING = 4;//可变

var singlePicSize;

var NineGridImageView = React.createClass({

    propTypes: {
        picSpacing: React.PropTypes.number, //图片相互之间的间距
        pictures: React.PropTypes.array, //
        showAreaWidth: React.PropTypes.number, //展示区域的宽度, 默认为屏幕宽度
    },

    getDefaultProps: function() {
        return{
            showAreaWidth: Dimensions.get('window').width,
            picSpacing: DEFAULT_PIC_SPACING,
        };
    },

    getInitialState : function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    },

    componentDidMount: function() {
        var source = this.props.pictures;
        source = this.props.pictures.length <= MAX_MULTI_PICTURES
            ? source : source.slice(0, MAX_MULTI_PICTURES);//最多显示九张
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(source),
        });
    },

    onPicClick: function() {
        ToastAndroid.show('item', ToastAndroid.SHORT);
    },

    _renderRow: function (picture, sectionID : number, rowID : number, highlightRow) {
        return(
            <SingleImageView
                picture = {picture}
                onPicClick = {()=> this.onPicClick(this.props.pictures, rowID)}
                position={rowID}
                totalPicNum={this.props.pictures.length}
                picSpacing={this.props.picSpacing}
                imageSize={singlePicSize}
            />
        );
    },

    render: function() {
        var pictures = this.props.pictures;
        if(!pictures || pictures.length === 0 || pictures == undefined || this.props.showAreaWidth == 0 || this.props.picSpacing < 0 || this.props.showAreaWidth < this.props.picSpacing) {
            return null;
        }

        var containerStyle = styles.container;
        singlePicSize = (this.props.showAreaWidth - this.props.picSpacing * (NUM_COLUMNS - 1)) / NUM_COLUMNS;
        if(pictures.length === 2 || pictures.length === 4) {
            //两张图或四张图也是方形排布, 限制containerStyle的宽度,以确保SingleImageView平分空间
            var twoPicWidth = singlePicSize * 2 + this.props.picSpacing;
            containerStyle = [containerStyle, {width: twoPicWidth}];
        } else {
            containerStyle = [containerStyle, {width: this.props.showAreaWidth}];
        }

        return(
            <View style={containerStyle}>
                <ListView
                    contentContainerStyle={styles.picListView}
                    ref='picListView'
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}>
                </ListView>
            </View>
        );
    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    //flexWrap:wrap表示父容器容纳不下会自动换行
    picListView: {
        alignItems: 'center',
        //justifyContent: 'space-between',//因5张或8张得时候会使最后一行的中间空出,所以结合SingleImageView改变了实现方案
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

module.exports = NineGridImageView;