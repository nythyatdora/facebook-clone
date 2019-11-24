import React from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Text
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import { postCreator } from './PostCreatorStyle';

export default function PostCreator(props) {
    return (
        <View style={postCreator.default}>
            <View style={postCreator.main}>
                <View style={postCreator.main__left}>
                    <Image
                        style={postCreator.profileImage}
                        source={{
                            uri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/71175784_759688541149001_2338558479481962496_n.jpg?_nc_cat=102&_nc_eui2=AeHQOLbr7xRWSDxfgyKOoDCHRp-3qcLSrKrU9uunDMXftgviU6EDnOKF10rzI3Ns6wpTVyy43-n62iPtWIOlYXGU35tgMjvu3FNNUqTHPTXDkQ&_nc_ohc=9DsTiG7VFnYAQklMa9V0hTVKzoBCQgrFAE7NR6j3DJ6TSV1a_GqihYBZQ&_nc_ht=scontent.fpnh2-1.fna&oh=25fb2b73fa13ac6380edeec9d72b177d&oe=5E508D8E',
                        }}>
                    </Image>
                </View>

                <View style={postCreator.main__right}>
                    <TouchableOpacity>
                        <TextInput style={[postCreator.inputAxisMargin, postCreator.textSizeDefault]} placeholder="What's on your mind?" editable={false}></TextInput>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={postCreator.buttons}>
                <TouchableOpacity style={postCreator.flex__1}>
                    <View style={postCreator.button__item}>
                        <Icon
                            size={20}
                            type='material'
                            name='live-tv'
                            color='red'
                        />
                        <Text style={postCreator.textLeftPadding}>Live</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={postCreator.flex__1}>
                    <View style={postCreator.button__item}>
                        <Icon
                            size={20}
                            type='material'
                            name='photo-library'
                            color='orange'
                        />
                        <Text style={postCreator.textLeftPadding}>Photo</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={postCreator.flex__1}>
                    <View style={postCreator.button__item}>
                        <Icon
                            size={20}
                            type='material'
                            name='my-location'
                            color='green'
                        />
                        <Text style={postCreator.textLeftPadding}>Check In</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
