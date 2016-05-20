/**
 * 单图布局View
 * Created by chen on 16/3/28.
 */

'use strict';
var React = require('react-native');

var {
    Image,
    TouchableOpacity,
    } = React;

var picMarginMap = new Map();//对于不同的图片总数,储存响应的需要设置rightMargin的图片索引,(key-value)-->(图片总数, 需要设置rightMargin的图片索引数组)

var SingleImageView = React.createClass({

    //在组件还没加载之前初始化, 不然会存在第一次渲染不正确的问题
    componentWillMount : function () {
        picMarginMap.set(1, []);
        picMarginMap.set(2, [0]);
        picMarginMap.set(3, [0, 1]);
        picMarginMap.set(4, [0, 2]);
        picMarginMap.set(5, [0, 1, 3]);
        picMarginMap.set(6, [0, 1, 3, 4]);
        picMarginMap.set(7, [0, 1, 3, 4]);
        picMarginMap.set(8, [0, 1, 3, 4, 6]);
        picMarginMap.set(9, [0, 1, 3, 4, 6, 7]);
    },

    //判断array中是否包含obj
    _arrayContains(array : Array, obj : number) {
        var i = array.length;
        while (i--) {
            if (array[i] == obj) {//不知道为啥===不行
                return true;
            }
        }
        return false;
    },

    render: function () {
        var picture = this.props.picture;
        if (picture == undefined || !picture) {
            return null;
        }

        var picStyle = {width: this.props.imageSize, height: this.props.imageSize, backgroundColor: '#bdbdbd'};

        //参见MultiImageView的111行: justifyContent: 'space-between'
        if(this.props.totalPicNum !== undefined && this.props.position !== undefined) {
            var marginList = picMarginMap.get(this.props.totalPicNum);
            if(marginList != undefined && marginList.length !== 0) {
                if(this._arrayContains(marginList, this.props.position)) {
                    picStyle = [picStyle, {marginRight: this.props.picSpacing}];
                }
            }
        }

        return (
            <TouchableOpacity onPress={this.props.onPicClick} activeOpacity={0.6}>
                <Image style={[picStyle, {marginBottom: this.props.picSpacing}]} source={{uri: picture}}/>
            </TouchableOpacity>
        );
    },

});

module.exports = SingleImageView;