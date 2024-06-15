import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Bitcoin from './src/pages/conversorBitcoin'
import Dolar from './src/pages/conversorDollar'
import Euro from './src/pages/conversorEuro'

const Tab = createMaterialTopTabNavigator();

const icons = {
  Dolar:{
    name: 'dollar',
  },
  Euro:{
    name: 'euro',
  },
  Bitcoin:{
    name: 'bitcoin',
  }
}


export default function App(){
  return(
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={ ({route}) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <FontAwesome name={name} color={color} size={22} />
            }
          }) }
        >
          <Tab.Screen name="Dolar" component={Dolar} options={{ headerShown: false }}/>
          <Tab.Screen name="Euro" component={Euro} options={{ headerShown: false }}/>
          <Tab.Screen name="Bitcoin" component={Bitcoin} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}