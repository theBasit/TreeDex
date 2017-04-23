import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
  NavigationExperimental,
  Dimensions,
  ScrollView,
  Platform,
  BackAndroid
} from 'react-native';

import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'

export default () => (
 <View style={containerStyles.container}>
   <Text style={textStyles.title}>This is the friends page</Text>
   <ButtonCustom onPress={console.log('button pressed')} title='sample button' />
 </View>
)
