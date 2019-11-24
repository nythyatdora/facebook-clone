import React from 'react';
import { header } from './HeaderStyle';

import {
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

export default function Header(props) {
    return (
        <View style={header.default}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={header.container}>
                <View style={header.left}>
                    <Text style={header.appTitle}>facebook</Text>
                </View>

                <View style={header.right}>
                    <TouchableOpacity>
                        <View style={header.button}>
                            <Icon
                                size={28}
                                type='material'
                                name='search'
                                color='#000'
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={header.button}>
                            <Icon
                                size={22}
                                type='material'
                                name='message'
                                color='#000'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}