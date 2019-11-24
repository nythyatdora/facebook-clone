import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import {
    Icon,
} from 'react-native-elements';

import { post } from './PostStyle';

export default function Post(props) {
    let { poster, postData } = props.data;

    return (
        <View style={post.default}>
            <View style={post.header}>
                <View style={post.header__left}>
                    <View style={post.header__posterImage}>
                        <Image style={post.posterImage} source={{ uri: poster.userProfilePictureUri }}></Image>
                    </View>

                    <View style={post.header__posterDetail}>
                        <Text style={post.poster__name}>{poster.userFullName}</Text>
                        <View style={post.headerDate}>
                            <Text style={post.header__date}>{poster.uploadDate}</Text>
                            <Icon
                                size={14}
                                type='material'
                                name='public'
                                color='darkgray'
                            />
                        </View>
                    </View>
                </View>

                <View style={post.header__right}>
                    <TouchableOpacity>
                        <Icon
                            size={26}
                            type='material'
                            name='more-horiz'
                            color='darkgray'
                        ></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={post.body}>
                <View style={post.body__description}>
                    <Text>{postData.description}</Text>
                </View>

                <View style={post.body__image}>
                    <Image style={post.bodyImage} source={{ uri: postData.pictureUri }}></Image>
                </View>
            </View>

            <View style={post.footer}>
                <View style={post.footer__left}>
                    <View style={post.emotions__icon}>
                        <Icon
                            size={16}
                            type='foundation'
                            name='like'
                            color='#fff'
                        >
                        </Icon>
                    </View>
                    <Text style={post.emotions__counter}>{postData.counter.emotions.like}</Text>
                </View>

                <View style={post.footer__right}>
                </View>
            </View>

            <View style={post.buttons}>
                <TouchableOpacity style={post.button__item}>
                    <Icon
                        size={18}
                        type='feather'
                        name='thumbs-up'
                        color='#000'
                    ></Icon>
                    <Text style={post.paddingLeft}>Like</Text>
                </TouchableOpacity>

                <TouchableOpacity style={post.button__item}>
                    <Icon
                        size={18}
                        type='feather'
                        name='message-square'
                        color='#000'
                    ></Icon>
                    <Text style={post.paddingLeft}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={post.button__item}>
                    <Icon
                        size={18}
                        type='feather'
                        name='share'
                        color='#000'
                    ></Icon>
                    <Text style={post.paddingLeft}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}