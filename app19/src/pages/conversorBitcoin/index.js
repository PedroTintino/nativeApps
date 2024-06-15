import { useState } from 'react';
import Converter from '../../components/converter';

export default function Bitcoin(){
  const [valor, setValor] = useState()
  const [resultado, setResultado] = useState()

  function conversor() {
    let converterValor = 'BTC ' + (valor * 0.0000030).toFixed(7)
    setResultado(converterValor)
  }

  return(
    <Converter onChangeText={setValor} onPress={conversor} resultado={resultado}/>
  );
}