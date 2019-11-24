import React from 'react';
import {
    View,
    FlatList,
    ScrollView,
} from 'react-native';

import Story from '../Story/Story';

import { storyListView } from './StoryListViewStyle';

const loggedUser = {
    userId: '1',
    userData: {
        userFullName: 'Ny Thyatdora',
        userProfilePictureUri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/71175784_759688541149001_2338558479481962496_n.jpg?_nc_cat=102&_nc_eui2=AeHQOLbr7xRWSDxfgyKOoDCHRp-3qcLSrKrU9uunDMXftgviU6EDnOKF10rzI3Ns6wpTVyy43-n62iPtWIOlYXGU35tgMjvu3FNNUqTHPTXDkQ&_nc_ohc=9DsTiG7VFnYAQklMa9V0hTVKzoBCQgrFAE7NR6j3DJ6TSV1a_GqihYBZQ&_nc_ht=scontent.fpnh2-1.fna&oh=25fb2b73fa13ac6380edeec9d72b177d&oe=5E508D8E',
    },
    isUser: true,
};

const trashData = [
    {}, {},

    {
        userId: '2',
        userData: {
            userFullName: 'Yim Metra',
            userProfilePictureUri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-9/s960x960/53720111_2257822364535510_5124054189248348160_o.jpg?_nc_cat=110&_nc_eui2=AeF17-9LqIjvSI8dinG8Jp1UBCwGZwt9Kg4RR935AVyMg2BPWuP_DrCMbUBcFjEkg_QmJHUtjM1TK5wMfy72j5fi42PxDjsJkU4DeT4UVeN6aA&_nc_ohc=eM_h3kxw1WgAQlELpa_fIGDHPKRZjEnH7U8Mz6Lb5JJNoFK1hk3Bq-JYg&_nc_ht=scontent.fpnh2-1.fna&oh=ac5a433d0d10e29e1858721832d1175c&oe=5E80E00C',
        }
    },

    {
        userId: '3',
        userData: {
            userFullName: 'Hor Raden',
            userProfilePictureUri: 'https://scontent.fpnh2-2.fna.fbcdn.net/v/t1.0-1/p960x960/75443095_2388063551512250_4198809850190233600_o.jpg?_nc_cat=108&_nc_eui2=AeGTUJObCyns-j5M3X9zPwEDe3zzD7nULDp1Cy5WuYZIp3Dey7w5fA7CHfZfNtluIK_kTVaIV6pin7wycIxXbs8acFN-SQakPqoPR31UFNDAWQ&_nc_ohc=Ej-kh8_Yy4cAQnsHOT6f8MhM2ztmgbQgKRQ4dLHmuBu9xj3PShNXFkK8A&_nc_ht=scontent.fpnh2-2.fna&oh=defdbf4081a97c5eac3663b0fcf3d3d5&oe=5E3E5225',
        }
    },

    {
        userId: '4',
        userData: {
            userFullName: 'Vin Sovann',
            userProfilePictureUri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-1/c0.0.780.780a/71824349_1328285537342531_9851005709582336_n.jpg?_nc_cat=103&_nc_eui2=AeGDFf7kYr0Trh2_4ql3YgLMicwpo8RhMFMo3J1T9OVPs9Nsx7tCM-N_QS04xhy8PaitHj8Le5Cq8IBVaWRWFwKQMRQ1b9M6IZDswIhGHx5KTQ&_nc_ohc=rj7MeH5u_XkAQlIbgTeprIGcHTiZsbPchQl6giUC0YVTWuDLPV9QLgjRw&_nc_ht=scontent.fpnh2-1.fna&oh=852d94ebfc8d9380a2dde32481341e83&oe=5E3E3A70',
        }
    },

    {
        userId: '5',
        userData: {
            userFullName: 'Sok Peav',
            userProfilePictureUri: 'https://scontent.fpnh2-1.fna.fbcdn.net/v/t1.0-1/c0.0.960.960a/p960x960/62176415_2848243095250542_5990408895976177664_o.jpg?_nc_cat=104&_nc_eui2=AeEKhNNoW2Yoknjxbv0uGmsQzmLSU3BH5S3MDU9n_L56vgGHukcVQnvtcIYDF75lqNxA0SD8LU-Ad8rNqFpR3LeNXMaapCSZPPmPKhZHfzD0ng&_nc_ohc=KL_fNqBDPCYAQkfEbkUfBT2p8UFt8-MvaVPO1SNoH9udyUOtmDh_Lqlrw&_nc_ht=scontent.fpnh2-1.fna&oh=3b93a9683fa861f89a89322a79fbe3aa&oe=5E4ACE57',
        }
    },
];

export default function StoryListView(props) {
    return (
        <View
            style={storyListView.default}
        >
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={trashData}
                renderItem={({ item, index }) => <>
                    {index === 0 ?
                        <Story data={loggedUser} add={true}></Story>
                        : index === 1 ?
                            <Story data={loggedUser}></Story>
                            : <Story data={item}></Story>
                    }
                </>
                }
                keyExtractor={(item) => item.id}
                refreshing={true}
            >
            </FlatList >
        </View >
    );
}
