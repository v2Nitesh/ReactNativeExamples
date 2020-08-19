import React, { useState } from 'react'
import {
    View,
    Text, StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'

import Card from '../component/Card';
import Colors from '../constants/Colors';
import InputBox from '../component/InputBox';
import NumberContainer from '../component/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g), '');
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99',
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        // Alert.alert();
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text> You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Test" onPress={() => props.onGameStart(selectedNumber)} />
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() =>
            Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>The Game Screen! </Text>
                <Card style={styles.inputContainer}>
                    <Text> Select a Number </Text>
                    <InputBox
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        maxLength={2}
                        autoCorrect={false}
                        keyboardType="number-pad"
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler} color={Colors.accent} /></View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',


    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'

    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',



    },

});

export default StartGameScreen;