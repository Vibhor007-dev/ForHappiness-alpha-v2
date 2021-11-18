import * as React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ImageBackground, Platform} from 'react-native'

export default class Joke extends React.Component{
    render(){
        return(
            <View>
            <Text>Joke Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });