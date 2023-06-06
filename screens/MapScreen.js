import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import MapView from 'react-native-maps';
import NavigationCard from "../components/NavigationCard";
import RideOptionsCard from "../components/RideOptionsCard";
import {createStackNavigator} from '@react-navigation/stack';


const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
     
      <View style={tw `h-1/2`}>
        <Map></Map>
      </View>
      <View style={tw `h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigationCard}
            options={{
              headerShown:false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown:false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})