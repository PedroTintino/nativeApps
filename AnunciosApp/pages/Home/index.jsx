import React from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { styles } from './styles';

const products = [
  { id: 1, title: 'Produto 1', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 1' },
  { id: 2, title: 'Produto 2', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 2' },
  { id: 3, title: 'Produto 3', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 3' },
  { id: 4, title: 'Produto 4', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 4' },
  { id: 5, title: 'Produto 5', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 5' },
];

function HomeScreen({ navigation }){
  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Button
        title="Ver detalhes"
        onPress={() => navigation.navigate('Details', { product: item })}
      />
    </View>
  );
  return (
    <>
    <Text style={styles.screenTitle}>Anúncios</Text>
    <FlatList
    data={products}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    horizontal
    contentContainerStyle={styles.container}
    showsHorizontalScrollIndicator={false}
  />
  </>
  );
};

export default HomeScreen;
