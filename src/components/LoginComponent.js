import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import { login } from '../store/actions/login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  label: {
    color: 'black'
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10
  },
  title: {
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '15%'
  }
});

class LoginComponent extends Component {

  state = {
    email: '',
    password: ''
  }

  async onLogin() {
    const { login } = this.props;
    // await login();
    // console.log(this.props)
    this.props.navigation.navigate('Home');
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text h2>LockHere</Text>
          <Text>Busque seu armário inteligente aqui</Text>
        </View>
        
        <Input 
          testID="email_input" 
          placeholder='email@exemplo.com' 
          label="Email" 
          labelStyle={styles.label} 
          onChangeText={(email) => this.setState({ email })} />
        <Input 
          testID="password_input" 
          placeholder="******" label="Senha" 
          labelStyle={styles.label} 
          secureTextEntry 
          onChangeText={(password) => this.setState({ password })} />

        <Text onPress={() => {console.log('aqui')}} style={{ alignSelf: 'flex-end' }}> Esqueci minha senha </Text>
        <View style={{  marginTop: 15 }}>
          <Button buttonStyle={styles.button} title="Entrar" onPress={() => this.onLogin()} />
          <Text h4 style={{ alignSelf: 'center' }}>OU</Text>
          <Button buttonStyle={styles.button} title="Cadastre-se" onPress={() => this.onLogin()} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { login })(LoginComponent);
