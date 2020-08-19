import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={style.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber} </Text>
            <Text>Number was: {props.userNumber} </Text> 
            <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});