import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingListScreen from './src/pages/listaCompras';
import AddItemScreen from './src/pages/adicionarItem';

const Stack = createStackNavigator();

export default function App() {

return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ShoppingList" component={ShoppingListScreen} options={{headerShown: false}} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}