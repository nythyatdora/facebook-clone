import { StyleSheet } from 'react-native';
import * as Constraint from '../MainStyle';

export const story = StyleSheet.create({
    default: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 4,
        marginRight: 4,

        width: 125,
        height: 225,

        flexDirection: 'column',
        backgroundColor: '#D4D4D4',
        borderRadius: 16,
    },

    imageBackground: {
        width: '100%',
        height: '100%',
    },

    button: {
        width: 42,
        height: 42,
        borderRadius: 42,
        backgroundColor: Constraint.whiteColor,

        justifyContent: 'center',
        alignItems: 'center',

        top: 8,
        left: 8,
    },

    buttonProfile : {
        position: 'absolute',
        width: 48,
        height: 48,

        top: 8,
        left: 8,

        borderRadius: 42,
        borderColor: Constraint.primaryColor,
        borderWidth: 2.5,
    },
    
    text: {
        color: Constraint.whiteColor,
        position: 'absolute',
        
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: .5,
        
        bottom: 8,
        left: 8,
    },
    
    fill: {
        margin: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rounded: {
        borderRadius: 42,
    }
});