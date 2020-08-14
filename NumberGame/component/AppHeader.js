import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import Colors from '../constants/Colors';

const AppHeader = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    },
});

export default AppHeader;