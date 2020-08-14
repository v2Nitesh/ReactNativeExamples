import React, {useState} from 'react'
import {View, 
    Text, StyleSheet, 
    TextInput, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard
 } from 'react-native'

import Card from '../component/Card';
import Colors from '../constants/Colors';
import InputBox from '../component/InputBox';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g),'');
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber =  parseInt(enteredValue);
        if ( chosenNumber === Nan || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        
    }

    let confirmedOutput;

    if (confirmed) {
    confirmedOutput = <Text> Chosen Number: {selectedNumber}</Text>
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
                        onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={styles.button}>
                        <Button 
                        title="Confirm" 
                        onPress={confirmInputHandler} 
                        color={Colors.primary}/></View>
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
        marginVertical:10,
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

    }

});

export default StartGameScreen;