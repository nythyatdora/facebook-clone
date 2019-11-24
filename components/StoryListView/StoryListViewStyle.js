import { StyleSheet, Dimensions } from 'react-native';

export const storyListView = StyleSheet.create({
    default : {
        marginTop: 8,
        width: Dimensions.get('window').width,
        height: 240,

        backgroundColor: 'white',
    }
});