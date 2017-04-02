import React, { Component } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>

            <Container>
                <Text style={styles.label}>
                    Username or Email
                </Text>
                <TextInput
                    style={styles.textInput}
                />
            </Container>
            <Container>
                <Text style={styles.label}>
                    Password
                </Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </Container>
            <View style={styles.footer}>
                <Container>
                    <Button
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                        onPress={this.signinHandler.bind(this)} />
                </Container>
                <Container>
                    <Button
                        label="Forgot Login/Pass"
                        styles={{button: styles.primaryButton, label: styles.label}}
                        onPress={this.forgotPassHandler.bind(this)} />
                </Container>
                <Container>
                    <Button
                        label="CANCEL"
                        styles={{label: styles.transparentButton}}
                        onPress={this.cancelHandler.bind(this)} />
                </Container>
            </View>

        </ScrollView>
    );
  }
  cancelHandler() {
  //execute any code here
    console.log('cancel button pressed')
  }
  forgotPassHandler() {
  //execute any code here
    alert('forgot pass button pressed')
  }
  signinHandler() {
  //execute any code here
    alert('signin button pressed')
  }
  signinFacebookHandler() {
  //execute any code here
    console.log('fb button pressed')
  }

}
const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E8D1E3',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
       width: 230,
       flex: 1,
       alignSelf: 'center',
       textAlign: 'center',
       fontSize: 20,
       fontWeight: '600',
       color: '#ffffff'
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        width: 250,
        color: '#555555',
        padding: 10,
        height: 50,
        borderColor: '#E0AEFF',
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 18,
        color: '#841584'
    },
    buttonBigText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 18,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 18,
        color: '#595856'
    },
    primaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#328FE6',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#75F4FF'
    },
    footer: {
        marginTop: 50
    }


});
