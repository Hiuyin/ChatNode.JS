import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>
        Esse botão vai imprimir na tela numeros aleatórios
      </Text>
      <Button
          onPress={()=>{
            let teste = Math.random()
            
            Alert.alert(`O numero tirado foi ${teste}`)
          }}
          title="Teste o Número"
          color="#000000"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
