import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pessoal from './components/pessoal';
import Formacao from './components/formacao';
import Experiencia from './components/experiencia';

const Tab = createMaterialTopTabNavigator();

function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator style={{paddingTop: 50}}>
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formação" component={Formacao} />
        <Tab.Screen name="Experiência" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
