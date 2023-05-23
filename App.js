import { StyleSheet, Text, View } from 'react-native';
//importt the provider from redux
import { Provider } from 'react-redux';

//import the store
import {store} from "./store"
import HomeScreen from './screens/HomeScreen';

//Set up REDUX

export default function App() {
  return (
    <Provider store={store}>
        <HomeScreen></HomeScreen>
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
