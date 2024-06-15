import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from './styles';

const empregos = [
    { id: 1, title: 'Emprego 1', salario: 3000, description: 'Descrição do Emprego 1' },
    { id: 2, title: 'Emprego 2', salario: 3000, description: 'Descrição do Emprego 2' },
    { id: 3, title: 'Emprego 3', salario: 2100, description: 'Descrição do Emprego 3' },
    { id: 4, title: 'Emprego 4', salario: 2500, description: 'Descrição do Emprego 4' },
    { id: 5, title: 'Emprego 5', salario: 2800, description: 'Descrição do Emprego 5' },
    { id: 5, title: 'Emprego 5', salario: 2800, description: 'Descrição do Emprego 5' },
  ];

  function HomeScreen({ navigation }){
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.salary}>Salário: R$ {item.salario.toFixed(2)}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Button
          title="Ver detalhes"
          onPress={() => navigation.navigate('Details', { product: item })}
        />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Vagas de Emprego</Text>
        <ScrollView
          data={empregos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

export default HomeScreen;
