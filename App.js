import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image>{currentimage}</Image>
      <Button title="Roll Dice" onPress={rollDice}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
let currentimage = /assets/dice1.png
function rollDice(){
  var result = Math.floor(Math.random() * 6) + 1;
  if (result == 1){
currentimage = "/assets/dice1.png"
  }else if(result == 2){
    currentimage = "/assets/dice2.png"
  }else if(result == 3){
    currentimage = "/assets/dice3.png"
  }else if(result == 4){
    currentimage = "/assets/dice4.png"
  }else if(result == 5){
    currentimage = "/assets/dice5.png"
  }else if(result == 6){
    currentimage = "/assets/dice6.png"
  }
  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
