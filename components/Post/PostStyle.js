import { StyleSheet, Dimensions } from 'react-native';
import * as Constraint from '../MainStyle';

export const post = StyleSheet.create({
    default: {
        marginTop: 8,

        padding: 12,

        backgroundColor: 'white',
    },

    header: {
        flex: 1,
        flexDirection: 'row',
    },

    header__left: {
        flex: 1,
        flexDirection: 'row',
    },

    header__posterDetail: {
        paddingLeft: 8,

        flexDirection: 'column',
        justifyContent: 'center',
    },

    poster__name: {
        letterSpacing: -.1,

        fontSize: 14,
        fontWeight: 'bold',
    },

    headerDate: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    header__date: {
        marginRight: 4,

        color: 'gray',
        fontSize: 12,
    },

    header__right: {
    },

    header__posterImage: {
        width: 48,
        height: 48,
    },

    posterImage: {
        width: '100%',
        height: '100%',

        borderRadius: 48,
    },

    body: {
        marginTop: 12,
    },

    body__description: {

    },

    body__image : {
        marginTop: 12,

        marginLeft: -12,
        marginRight: -12,
    },

    bodyImage: {
        width: Dimensions.get('screen').width,
        height: 300,
    },

    footer: {
        height: 40,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    footer__left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    emotions__icon: {
        width: 22,
        height: 22,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: Constraint.primaryColor,
        borderRadius: 18,
    },

    emotions__counter : {
        paddingLeft: 4,

        fontSize: 14,
    },

    footer__right: {
        flex: 1,
    },

    buttons: {
        height: 25,

        marginTop: 12,
        marginLeft: -12,
        marginRight: -12,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    button__item: {
        height: '100%',

        flex: 1,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
    },

    paddingLeft: {
        paddingLeft: 4,
    }
});