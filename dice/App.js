import React from 'react';
import { StyleSheet, Switch, Image, Button, TextInput, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dice: [1, 2]
    }
  }

  rollDice = () => {
    firstNumber = Math.floor(Math.random() * 6) + 1;
    secondNumber = Math.floor(Math.random() * 6) + 1;
  }

  render() {
    let diceUrl1 = 'https://www.jeffcohenonline.com/' + this.state.dice[0] + '.png'
    let diceUrl2 = 'https://www.jeffcohenonline.com/' + this.state.dice[1] + '.png'

    return (
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Image source={ {uri: diceUrl1} } style={styles.dice}/>
          <Image source={ {uri: diceUrl2} } style={styles.dice}/>
        </View>
        <Button onPress={this.rollDice}
              title="Roll The Dice"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginTop: 40
  },
  dice: {
    width: 100,
    height: 100,
    alignItems: 'center',
  }
});
