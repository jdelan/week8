import React from 'react';
import { StyleSheet, Button, TextInput, Text, View, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "",
      gps_coords: { latitude: 48.864716, longitude: 2.349014 }
    }
  }

  displaySatelliteImage(position) {
    console.warn(position)
  }

  handleSatelliteButton = (event) => {
    navigator.geolocation.getCurrentPosition( (position) => {
        console.log(position.coords)
        this.setState({ gps_coords: position.coords })
      }
    )
  }

  render() {
    console.log("Rendering...")

    let image_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
              this.state.gps_coords.latitude +
              "," +
              this.state.gps_coords.longitude +
              "&zoom=15&size=300x200&maptype=hybrid&key=AIzaSyBrLfaqBHZNoiI8463XDdy57fJHiwA8vy4"

    let size = {
      width: 300,
      height: 200
    }
    console.log("Image URL: ")
    console.log(image_url)
    return (
      <View style={styles.container}>
        <Text>Hello KIEI-924!</Text>
        <Button
          onPress={this.handleSatelliteButton}
          title="Get Satellite Photo"
          color="#00A"
        />
        <Image source={ {uri: image_url} }  style={size}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
