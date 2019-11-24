import React, { Component } from 'react';

import {
    View,
    FlatList,
} from 'react-native';

import Post from '../Post/Post';

import { postListView } from './PostListViewStyle';

const trashData = [
    {
        id: 1,
        poster: {
            userFullName: 'Ny Thyatdora',
            userProfilePictureUri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/71175784_759688541149001_2338558479481962496_n.jpg?_nc_cat=102&_nc_eui2=AeHQOLbr7xRWSDxfgyKOoDCHRp-3qcLSrKrU9uunDMXftgviU6EDnOKF10rzI3Ns6wpTVyy43-n62iPtWIOlYXGU35tgMjvu3FNNUqTHPTXDkQ&_nc_ohc=9DsTiG7VFnYAQklMa9V0hTVKzoBCQgrFAE7NR6j3DJ6TSV1a_GqihYBZQ&_nc_ht=scontent.fpnh2-1.fna&oh=25fb2b73fa13ac6380edeec9d72b177d&oe=5E508D8E',
            uploadDate: 'a moment ago',
            privacyType: 'public',
        },
        postData: {
            type: 'text+image',
            description: 'Eu aliquip sit esse cillum consectetur ea aute culpa. Eiusmod minim nisi sit amet esse Lorem nostrud esse. Ut sit amet eu duis pariatur ullamco do exercitation amet ad dolore. Consequat non aliquip eiusmod reprehenderit. Laboris eu cupidatat veniam eu do reprehenderit dolor occaecat quis quis qui consectetur fugiat. Esse incididunt reprehenderit sunt et do minim duis ullamco eiusmod cillum.',
            pictureUri: 'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/69758258_749818425469346_6106522022563545088_o.jpg?_nc_cat=103&_nc_ohc=484U8_yMp5IAQnBchTBngMe4TIwARfYDZRY9z5-6Ujf3Hl48o4OSFnLVQ&_nc_ht=scontent.fpnh10-1.fna&oh=39d6d24018e5c2048a0517e0181c6e7f&oe=5E4ACADB',

            linkURL: '',

            counter: {
                emotions_counter: 0,

                emotions: {
                    like: 0,
                    heart: 0,
                    haha: 0,
                    wow: 0,
                    sad: 0,
                    angry: 0,
                },

                shared: 0,
            },

            comments: [],
        }
    },

    {
        id: 2,
        poster: {
            userFullName: 'Yim Metra',
            userProfilePictureUri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/s960x960/53720111_2257822364535510_5124054189248348160_o.jpg?_nc_cat=110&_nc_eui2=AeF17-9LqIjvSI8dinG8Jp1UBCwGZwt9Kg4RR935AVyMg2BPWuP_DrCMbUBcFjEkg_QmJHUtjM1TK5wMfy72j5fi42PxDjsJkU4DeT4UVeN6aA&_nc_ohc=eM_h3kxw1WgAQlELpa_fIGDHPKRZjEnH7U8Mz6Lb5JJNoFK1hk3Bq-JYg&_nc_ht=scontent.fpnh2-1.fna&oh=ac5a433d0d10e29e1858721832d1175c&oe=5E80E00C',
            uploadDate: 'a moment ago',
            privacyType: 'public',
        },
        postData: {
            type: 'text+image',
            description: 'Eu aliquip sit esse cillum consectetur ea aute culpa. Eiusmod minim nisi sit amet esse Lorem nostrud esse. Ut sit amet eu duis pariatur ullamco do exercitation amet ad dolore. Consequat non aliquip eiusmod reprehenderit. Laboris eu cupidatat veniam eu do reprehenderit dolor occaecat quis quis qui consectetur fugiat. Esse incididunt reprehenderit sunt et do minim duis ullamco eiusmod cillum.',
            pictureUri: 'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-0/p206x206/14064082_1673426426308443_2226013251364480286_n.jpg?_nc_cat=110&_nc_ohc=ZX61grT-2KYAQkUrZtkkYpgQgYHKnehX5SYL_w_UD7RgzN91EVx71QHcg&_nc_ht=scontent.fpnh10-1.fna&oh=0a0a700798546bb8cdc961f71966af4b&oe=5E4B5E31',

            linkURL: '',

            counter: {
                emotions_counter: 0,

                emotions: {
                    like: 0,
                    heart: 0,
                    haha: 0,
                    wow: 0,
                    sad: 0,
                    angry: 0,
                },

                shared: 0,
            },

            comments: [],
        }
    },

    {
        id: 3,
        poster: {
            userFullName: 'Vin Sovann',
            userProfilePictureUri: 'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-1/c0.0.780.780a/71824349_1328285537342531_9851005709582336_n.jpg?_nc_cat=103&_nc_ohc=rj7MeH5u_XkAQl50pKj8NMNHPyho9Ul2_pL4GSF1X6zsWLH1TU8LZYnEg&_nc_ht=scontent.fpnh10-1.fna&oh=fda9189c7f940e1d7772cec3434da629&oe=5E3E3A70',
            uploadDate: 'a moment ago',
            privacyType: 'public',
        },
        postData: {
            type: 'text+image',
            description: 'Eu aliquip sit esse cillum consectetur ea aute culpa. Eiusmod minim nisi sit amet esse Lorem nostrud esse. Ut sit amet eu duis pariatur ullamco do exercitation amet ad dolore. Consequat non aliquip eiusmod reprehenderit. Laboris eu cupidatat veniam eu do reprehenderit dolor occaecat quis quis qui consectetur fugiat. Esse incididunt reprehenderit sunt et do minim duis ullamco eiusmod cillum.',
            pictureUri: 'https://scontent.fpnh10-1.fna.fbcdn.net/v/t1.0-9/49525744_1139079622929791_7504960818635603968_o.jpg?_nc_cat=108&_nc_ohc=dTwEcauoUZsAQlNaRMyAOc6XQxLPhjUOLq65J33OrF81WNrkGCbOg9DkQ&_nc_ht=scontent.fpnh10-1.fna&oh=96d9c784f4bec866c3d94dc1fbe61e77&oe=5E50495D',

            linkURL: '',

            counter: {
                emotions_counter: 0,

                emotions: {
                    like: 0,
                    heart: 0,
                    haha: 0,
                    wow: 0,
                    sad: 0,
                    angry: 0,
                },

                shared: 0,
            },

            comments: [],
        }
    },
];

export default class PostListView extends Component {
    render() {
        return (
            <View
                style={postListView.default}
            >
                <FlatList
                    contentContainerStyle={{ paddingBottom: 58 }}
                    showsVerticalScrollIndicator={false}
                    data={trashData}
                    renderItem={({ item, index }) => <>
                        <Post data={item}></Post>
                    </>
                    }
                    keyExtractor={(item) => item.id}
                    refreshing={true}
                >
                </FlatList >
            </View >
        );
    }
}
