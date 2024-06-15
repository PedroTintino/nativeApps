import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './src/pages/listaTarefas';
import AddTaskScreen from './src/pages/adicionarTarefa';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{headerShown: false}} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}