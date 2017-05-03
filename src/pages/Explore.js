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
import ButtonSquare from '../components/ButtonSquare'

//If you gonna change this please put it somewhere back too!!!

export default ({onPressQuests, onPressNews}) => (
 <View style={containerStyles.container}>
  <Text style={textStyles.header}>Explore</Text>
      <Image source={require('../images/news1.jpg')} style={containerStyles.ExploreImage}/>
      <Image source={require('../images/plant.jpg')} style={containerStyles.ExploreImage}/>
 </View>
)
