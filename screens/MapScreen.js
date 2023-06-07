import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import MapView from 'react-native-maps';
import NavigationCard from "../components/NavigationCard";
import RideOptionsCard from "../components/RideOptionsCard";
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      
          <TouchableOpacity 
          style={tw `bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
            <Icon
              name="menu"
              type="fontawesome" 
            />
          </TouchableOpacity>
      
     
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