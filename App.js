import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
//importt the provider from redux
import { Provider } from 'react-redux';

//import the store
import {store} from "./store"
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

//Set up REDUX

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown:false,
            } 
            } 
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown:false,
            } 
            } 
          />
        </Stack.Navigator>
      {/* <HomeScreen/> */}
      </SafeAreaProvider> 
      </NavigationContainer>
      
    </Provider>

    
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
