import { useState } from 'react';
import Converter from '../../components/converter';

export default function Dolar(){
  const [valor, setValor] = useState()
  const [resultado, setResultado] = useState()

  function conversor() {
    let converterValor = 'US$ ' + (valor * 0.19).toFixed(2)
    setResultado(converterValor)
  }

  return(
    <Converter onChangeText={setValor} onPress={conversor} resultado={resultado}/>
  );
}