import { StyleSheet } from 'react-native';

export const postCreator = StyleSheet.create({
    default: {
        backgroundColor: 'white',
    },

    main: {
        padding: 12,

        flexDirection: 'row',
    },

    main__left: {
        width: 48,
        height: 48,
    },

    main__right: {
        flex: 1,
    },

    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 42,
    },

    buttons: {
        height: 40,

        flexDirection: 'row',

        borderTopColor: 'lightgray',
        borderTopWidth: .5,
    },

    button__item: {
        height: '100%',
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    flex__1: {
        flex: 1,
    },

    textLeftPadding: {
        paddingLeft: 4,
    },

    inputAxisMargin: {
        marginLeft: 4,
        marginRight: 4,
    },

    textSizeDefault: {
        fontSize: 16,
    }
});