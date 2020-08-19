/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
 
import AppHeader from './component/AppHeader';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from "./screens/GameScreen";


const App: () => React$Node = () => {

  const [userNumber, setUserNumbrer] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumbrer(selectedNumber);
  };

  // let content = <StartGameScreen onStartGame={startGameHandler} />;
  let content = <StartGameScreen onGameStart={startGameHandler} />;

  if (userNumber) {
    content =  <GameScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.screen}>
      <AppHeader  title = "Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }

});

export default App;
