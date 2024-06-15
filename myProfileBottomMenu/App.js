import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pessoal from './components/pessoal';
import Formacao from './components/formacao';
import Experiencia from './components/experiencia';

const Tab = createBottomTabNavigator();

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
