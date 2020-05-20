import PropTypes from 'prop-types';
import React, { useState,useEffect } from 'react';
import { Image, StyleSheet, View,TouchableHighlight } from 'react-native';
// TODO: support web
// @ts-ignore
import FastImage from 'react-native-fast-image'
import { StylePropType } from './utils';
const styles = StyleSheet.create({
    container: {},
    image: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
        resizeMode: 'cover',
    },
    imageActive: {
        flex: 1,
        resizeMode: 'contain',
    },
});

export default function  MessageImage(props){

    const { containerStyle, getMedia, imageProps, imageStyle, currentMessage, } = props;
    if (!!currentMessage) {
        return (<View style={[styles.container, containerStyle]}>
                    {<TouchableHighlight  onPress={() => getMedia(currentMessage.text)}>
                            <Image {...imageProps}  style={[styles.image, imageStyle]} source={currentMessage.image } />
                    </TouchableHighlight> }

    </View>);
    }
    return null;

}
MessageImage.defaultProps = {
    currentMessage: {
        image: null,
    },
    containerStyle: {},
    imageStyle: {},
    imageProps: {},
    lightboxProps: {},
};
MessageImage.propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: StylePropType,
    imageStyle: StylePropType,
    imageProps: PropTypes.object,
    lightboxProps: PropTypes.object,
};
//# sourceMappingURL=MessageImage.js.map
