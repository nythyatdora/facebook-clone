import React from 'react';
import {
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Avatar,
    Icon,
} from 'react-native-elements';

import { story } from './StoryStyle';

import * as Constraint from '../MainStyle';

export default function Story(props) {
    let { userFullName, userProfilePictureUri } = props.data.userData;
    let { add } = props || true;
    let { isUser } = props.data;
    let textSection;

    if (add) {
        textSection = 'Add New Story';
    }
    else {
        textSection = !isUser ? userFullName: 'Your Story';
    }

    return (
        <TouchableOpacity>
            <View style={story.default}>
                <ImageBackground
                    source={{ uri: userProfilePictureUri }}
                    style={story.imageBackground}
                    imageStyle={{ borderRadius: 16 }}>

                    {!add ?
                        <View style={story.buttonProfile}>
                            <Image source={{ uri: userProfilePictureUri }} style={[story.fill, story.rounded]}></Image>
                        </View>
                        :
                        <View style={story.button}>
                            <Icon size={28} type='material' name='add' color={Constraint.primaryColor}></Icon>
                        </View>
                    }
                    <Text style={story.text}>{textSection}</Text>
                </ImageBackground>
            </View >
        </TouchableOpacity >
    );
}
