import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './.expo/components/Form';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Details from './.expo/components/Details';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <>
    
     <NavigationContainer>
     <Stack.Navigator >
      <Stack.Screen name="Form" component={Form} options={{headerShown:false}}/>
      <Stack.Screen name="details" component={Details} />
      
    </Stack.Navigator>
     </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
