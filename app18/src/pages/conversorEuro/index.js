import { useState } from 'react';
import Converter from '../../components/converter';

export default function Euro(){
  const [valor, setValor] = useState()
  const [resultado, setResultado] = useState()

  function conversor() {
    let converterValor = '€ ' + (valor * 0.18).toFixed(2)
    setResultado(converterValor)
  }

  return(
    <Converter onChangeText={setValor} onPress={conversor} resultado={resultado}/>
  );
}