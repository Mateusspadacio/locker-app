import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import { login } from '../store/actions/user';

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

  errorMessage(field) {
    const { errors } = this.props.user;
    if (!errors) return null;

    return <Text style={{ marginBottom: 10, marginLeft: 10 }}>{errors[field]}</Text>;
  }

  async onLogin() {
    const { login } = this.props;
    const { email, password } = this.state;

    await login({ email, password });
    console.log('propso', this.props.user)
    if (!this.props.user.errors) this.props.navigation.navigate('Home');
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
        {this.errorMessage('email')}
        <Input 
          testID="password_input" 
          placeholder="******" label="Senha" 
          labelStyle={styles.label} 
          secureTextEntry 
          onChangeText={(password) => this.setState({ password })} />
        {this.errorMessage('password')}
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

const mapStateToProps = (props) => {
  return props;
}

export default connect(mapStateToProps, { login })(LoginComponent);
