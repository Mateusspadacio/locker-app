import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Routes from './routes';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider> 
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
