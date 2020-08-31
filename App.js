import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/FontAwesome"
function verificarNome(){
      alert("oie")
}
const App = () => {
  const [primeiro, setPrimeiro] = useState()
  const [segundo, setSegundo] = useState()

  const x = parseFloat(primeiro)
  const y = parseFloat(segundo)
  const soma = x+y
  const divisao = Number(x/y).toFixed(2)
  const mult = x*y
  const subt = x-y
  return (
    
    <>
      <ScrollView>
        <View style={styles.imcInserir}>
            <TextInput 
            placeholder="Numero 1" 
            value={primeiro}
            onChangeText={setPrimeiro}
            style={styles.inputTexto}
            />
        </View>
        <View style={styles.imcInserir2}>
            <TextInput 
            placeholder="Numero 2" 
            value={segundo} 
            onChangeText={setSegundo}
            style={styles.inputTexto}
            />
        </View>
        <View style={styles.resultados}>
           <Text style={styles.valoresTexto}>Soma: {soma}</Text>
           <Text style={styles.valoresTexto}>Divisao: {divisao}</Text>
           <Text style={styles.valoresTexto}>Multiplicação: {mult}</Text>
           <Text style={styles.valoresTexto}>Subtração: {subt}</Text>
        </View>
        
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
 imcInserir:{
    marginTop: 90,
    alignSelf:"center",
 },
 imcInserir2:{
  alignSelf:"center",

  marginTop: 20
},
 inputTexto:{
   fontSize: 30,
 },
 resultados:{
   marginTop: 45,
   marginLeft: 40,
 },
 valoresTexto:{
   fontSize: 17
 }
});





























/*
<View style={styles.header}>
          <Icon name="long-arrow-left" size={30} color="black" style={styles.setaVoltar} />
          <Text style={styles.textoHeader}>Meu saldo</Text>
          <Icon name="question" size={30} color = "black" style={styles.iconeHelp}/>
        </View>
        <View style={styles.orgBox}>
         <View style={styles.saldoPrincipal}>
         <Text style={styles.valorSaldo}>
            R$ 988.77,22
          </Text>
          <Text style={styles.saldoEscrito}>
            Valor na sua conta
          </Text>

         </View>
          

        </View>
*/









 /*
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingTop: 6
  },
  textoHeader:{
    fontSize: 23,
    alignSelf: "center",
    fontWeight: "bold"
  },
  setaVoltar:{
    paddingLeft: 5
  },
  iconeHelp: {
    paddingRight: 5,
    backgroundColor: "#98989898",
  },
  orgBox:{
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
  },
  saldoPrincipal:{
    paddingLeft: 20,
    backgroundColor: "#999",
    height: 80, 
    borderRadius: 20
  },
  saldoEscrito:{
    fontSize: 30,
  },
  valorSaldo:{
    fontSize: 23,
    color: "#000",
    paddingTop: 7
  }
  */
export default App;
