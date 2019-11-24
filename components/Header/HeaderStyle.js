import { StyleSheet } from 'react-native';
import * as Constraint from '../MainStyle';

export const header = StyleSheet.create({
    default: {

    },
    
    container: {
        padding: 14,

        flexDirection: 'row',
    },

    left: {
        flex: 1
    },

    right: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },

    appTitle: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 32,

        color: Constraint.primaryColor,
    },

    button: {
        marginLeft: 4,
        marginRight: 4,

        width: 36,
        height: 36,
        backgroundColor: 'lightgray',
        borderRadius: 36,

        justifyContent: 'center',
        alignItems: 'center',
    }
});