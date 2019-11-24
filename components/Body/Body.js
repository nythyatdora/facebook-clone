import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import { body } from './BodyStyle';

export default function Body(props) {
    return (
        <ScrollView
            style={body.default}
            showsVerticalScrollIndicator={false}>
            {props.children}
        </ScrollView>
    );
}
