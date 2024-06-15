import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function DetailsScreen({ route }){
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default DetailsScreen;