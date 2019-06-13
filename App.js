import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import db from './firebase';

export default class App extends Component {
  state = {
    message: null,
    doc: null
  };

  async componentDidMount() {
    const doc = await db
      .collection('detox')
      .doc('hello')
      .get();

    this.setState({
      doc: doc.data()
    });
  }

  onButtonPress = message => () => {
    this.setState({
      message
    });
  };

  render() {
    const { message, doc } = this.state;
    const { container, link, header } = styles;

    if (message) {
      return (
        <View style={container}>
          <Text style={header}>{message}</Text>
        </View>
      );
    }

    return (
      <View testID="welcome" style={container}>
        <Text style={header}>Welcome</Text>
        <TouchableOpacity testID="helloWorld" onPress={this.onButtonPress('Hello World')}>
          <Text style={link}>{doc ? doc.world : 'Loading'}</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="helloDetox" onPress={this.onButtonPress('Hello Detox')}>
          <Text style={link}>Detox</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  link: {
    color: 'blue',
    marginBottom: 20
  },
  header: {
    fontSize: 25,
    marginBottom: 30
  }
});
