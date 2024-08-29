import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import Botao from './items/botao';
import { DIMENSIONS } from './items/Constant';
import { Calculos } from './util/calculos';

const DIVISAO = "/"
const SOMA = "+"
const SUBTRACAO = "-"
const MULTIPLICACAO = "x"

let num1 = "0"
let num2 = "0"
let operadorIsSet = false
let primeiraNumero1 = true
let primeiraNumero2 = true
let operador = ""

export default function App() {
  const [numeroView, setNumeroView] = React.useState("0")
  const [operadorView, setOperadorView] = React.useState("")
  const calculos = new Calculos()


  function clear() {
    setNumeroView("0")
    setOperadorView("")
    num1 = "0"
    num2 = "0"
    operador = ""
    operadorIsSet = false
    primeiraNumero1 = true
    primeiraNumero2 = true
  }

  function salvarOperador(op) {
    if (op === operadorView) {
      setOperadorView("")
      operadorIsSet = false
      operador = op

    } else {
      primeiraNumero2 = true
      operadorIsSet = true
      operador = op
      setOperadorView(op)
    }




  }

  function negativo(negative = false) {
    if (negative) {
      if (numeroView.includes('-')) {
        let nu = numeroView.replace("-", "")
        setNumeroView(nu)
        return
      } else {
        setNumeroView("-" + numeroView)
        return
      }
    }
  }

  function decimal(decimal = false) {
    if (numeroView.includes(',')) {
      return
    }
    setNumeroView(numeroView + ",")

  }

  function setarVariaveis(calculo) {

    num1 = calculo
    setNumeroView(calculo)
    setOperadorView("")
    console.log("num1: " + num1 + "num2: " + num2)
  }

  function retornarNumero(n = "") {
    return parseFloat(n.replace(',', "."))
  }

  function calcular(operador) {
    console.log("numero1: " + num1 + " " + "numero2:" + num2)
    const n1 = retornarNumero(num1)
    const n2 = retornarNumero(num2)
    console.log("num1: " + num1 + " " + "num2:" + num2)
    switch (operador) {
      case (SOMA): setarVariaveis(calculos.soma(n1, n2))
        break
      case (MULTIPLICACAO): setarVariaveis(calculos.mutiplicacao(n1, n2))
        break
      case (DIVISAO): setarVariaveis(calculos.divisao(n1, n2))
        break
      case (SUBTRACAO): setarVariaveis(calculos.subtracao(n1, n2))
        break
    }
  }

  function porcentagem() {
    const num1 = parseFloat(numeroView.replace(",", "."))
    const calculo = (num1 / 100).toString().replace(".", ",")

    setNumeroView(calculo)
  }

  function verificar0(n) {
    if (n === "0" && numeroView === "0") {
      return true
    } else if (n === "0" && numeroView === "-0") {
      return true
    } else if (numeroView === "0" && numeroView.length == 1) {
      if (!operadorIsSet) {
        salvarNum1(n)
      } else {
        salvarNum2(n)
      }
      return true
    } else if (numeroView === "-0") {
      if (!operadorIsSet) {
        salvarNum1(n)
      } else {
        salvarNum2(n)
      }
      return true
    }
  }

  function salvarNum1(n) {
    if (primeiraNumero1) {
      num1 = n
      primeiraNumero1 = false
      setNumeroView(n)
      return
    }
    n = numeroView + n
    setNumeroView(n)
    num1 = n

  }
  function salvarNum2(n) {
    if (primeiraNumero2) {
      num2 = n
      primeiraNumero2 = false
      setNumeroView(n)

      return
    }
    n = numeroView + n
    num2 = n
    setNumeroView(n)

  }

  function salvarNumero(n) {
    console.log("num1:" + num1 + " num2: " + num2)
    if (verificar0(n)) {
      return
    }
    if (!operadorIsSet) {
      salvarNum1(n)
    } else {
      salvarNum2(n)
    }

  }
  return (
    <View style={styles.container}>
      <TextInput editable={false} style={styles.input} value={numeroView} onChangeText={setNumeroView} />
      <View style={styles.viewBotoes}>
        <Botao value={"AC"} onPress={() => clear()} corText='#000' cor='#A1A1A1' />
        <Botao value={"+/-"} onPress={() => negativo(true)} cor='#A1A1A1' />
        <Botao value={"%"} onPress={() => porcentagem()} cor='#A1A1A1' />
        <Botao value={"/"} onPress={() => salvarOperador(DIVISAO)} cor={operadorView === DIVISAO ? "#fff" : "#E89535"} corText={operadorView === DIVISAO ? "#E89535" : "#fff"} />
        <Botao value={"7"} onPress={() => salvarNumero("7")} />
        <Botao value={"8"} onPress={() => salvarNumero("8")} />
        <Botao value={"9"} onPress={() => salvarNumero("9")} />
        <Botao value={"X"} onPress={() => salvarOperador(MULTIPLICACAO)} cor={operadorView === MULTIPLICACAO ? "#fff" : "#E89535"} corText={operadorView === MULTIPLICACAO ? "#E89535" : "#fff"} />
        <Botao value={"4"} onPress={() => salvarNumero("4")} />
        <Botao value={"5"} onPress={() => salvarNumero("5")} />
        <Botao value={"6"} onPress={() => salvarNumero("6")} />
        <Botao value={"-"} onPress={() => salvarOperador(SUBTRACAO)} cor={operadorView === SUBTRACAO ? "#fff" : "#E89535"} corText={operadorView === SUBTRACAO ? "#E89535" : "#fff"} />
        <Botao value={"1"} onPress={() => salvarNumero("1")} />
        <Botao value={"2"} onPress={() => salvarNumero("2")} />
        <Botao value={"3"} onPress={() => salvarNumero("3")} />
        <Botao value={"+"} onPress={() => salvarOperador(SOMA)} cor={operadorView === SOMA ? "#fff" : "#E89535"} corText={operadorView === SOMA ? "#E89535" : "#fff"} />
        <Botao value={"0"} onPress={() => salvarNumero("0")} width={(DIMENSIONS * 2) + 12} />
        <Botao value={","} onPress={() => decimal(true)} />
        <Botao value={"="} onPress={() => calcular(operador)} cor={"#E89535"} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10

  },

  viewBotoes: {
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',

  },


  input: {
    color: "#fff",
    width: "100%",
    height: "30%",
    fontSize: 100,
    textAlign: 'right',
    textAlignVertical: 'bottom'
  }
});
