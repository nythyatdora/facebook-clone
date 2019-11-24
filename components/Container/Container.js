import React from 'react';

import {
    View
} from 'react-native';

import { container } from './ContainerStyle';

export default function Container(props) {
    return (
        <View style={container.default}>
            {props.children}
        </View>
    )
}
