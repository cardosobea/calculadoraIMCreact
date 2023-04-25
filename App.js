import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {peso: '', altura: '', resultado: 0.0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  
  calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info ='Menor que 18,5, Abaixo do peso'
    }
    else if (s.resultado < 24.9){
     s.info ='Entre 18,5 e 24,9, Peso normal'
    }
    else if (s.resultado < 29.9){
     s.info ='Entre 25,0 e 29,9, Acima do peso'
    }
    else if (s.resultado < 34.9) {
     s.info ='Entre 30,0 e 34,9, Obesidade grau I'
    }
    else if (s.resultado < 39.9) {
      s.info ='Entre 35,0 e 39,9, Obesidade grau II'
    }
    else if (s.resultado > 40.0) {
     s.info ='Maior que 40,0, Obesidade grau III'
    }
    this.setState(s)
  }

  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Altura (m)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='Insira sua altura em metros'
        />
        <Text style={styles.text}>Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Insira seu peso em kg'
        />
        <Button
          onPress={this.calculaIMC}
          title='Calcular'
          color='green'
        />
        <Text style={styles.input}>
         Seu IMC é: {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 5,
    margin: 20,
  }
});
