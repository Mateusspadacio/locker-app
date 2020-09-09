import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import { signup } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'
  },
  label: {
    color: 'black'
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10
  }
});

class SignupComponent extends Component {

  state = {};

  async onSubmit() {
    const { signup } = this.props;
    const { name, email, password, repassword, cpf, born } = this.state;

    await signup({  name, email, password, repassword, cpf, born  });

    console.log(this.props.user)
    if (this.props.user && !this.props.user.signup.errors) this.props.navigation.navigate('Home');
  }

  errorMessage(field) {
    const { errors } = this.props.user;
    if (!errors) return null;
    if (!errors.signup) return null;

    return <Text style={{ marginBottom: 10, marginLeft: 10, color: 'red' }}>{errors.signup[field]}</Text>;
  }

  datePicker() {
    if (!this.state.born) {
      this.setState({ born: moment().format('DD.MM.YYYY') });
    }

    return <DatePicker
      style={{ flex: 1 }}
      date={this.state.born}
      mode="date"
      placeholder="select date"
      format="DD.MM.YYYY"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      customStyles={{
        dateInput: {
          borderWidth: 0
        }
      }}
      onDateChange={(born) => { this.setState({ born }) }}
  />
  }

  render() {
    console.log(this.state)
    return (
      <ScrollView style={styles.container}>
        <Input
          testID="nome_input"
          placeholder='Insira seu nome'
          label="Nome"
          labelStyle={styles.label}
          onChangeText={(name) => this.setState({ name })} />
        {this.errorMessage('name')}
        <Input
          testID="email_input"
          placeholder='email@exemplo.com'
          label="Email"
          labelStyle={styles.label}
          onChangeText={(email) => this.setState({ email })} />
        {this.errorMessage('email')}
        <Input
          testID="cpf_input"
          placeholder='Insira seu cpf'
          label="Cpf"
          labelStyle={styles.label}
          onChangeText={(cpf) => this.setState({ cpf })} />
        {this.errorMessage('cpf')}
        <Input
          testID="data_input"
          label="Data de nascimento"
          labelStyle={styles.label}
          InputComponent={this.datePicker.bind(this)} />
        {this.errorMessage('born')}
        <Input
          testID="senha_input"
          placeholder='Insira a senha'
          label="Senha"
          labelStyle={styles.label}
          onChangeText={(password) => this.setState({ password })} />
        {this.errorMessage('password')}
        <Input
          testID="confirma_senha_input"
          placeholder='Confirme sua senha'
          label="Confirmar senha"
          labelStyle={styles.label}
          onChangeText={(repassword) => this.setState({ repassword })} />
        {this.errorMessage('repassword')}
        <Button buttonStyle={styles.button} title="Cadastrar" onPress={() => { this.onSubmit() }} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (props) => {
  console.log('props', props)
  return props;
}

export default connect(mapStateToProps, { signup })(SignupComponent);