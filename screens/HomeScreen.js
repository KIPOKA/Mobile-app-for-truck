import { StyleSheet, View , Image, SafeAreaView, ImageBackground} from 'react-native'; 
import React from 'react';
import tw from "tailwind-react-native-classnames";
import IconImage from '../assets/truck.png';
import NavOption from "../components/NavOption";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
       
      <Image
        style={{ 
            width: 90,
             height: 90,
             resizeMode:"contain", 
             
            }}
        source={IconImage}
        
      /> 

      <GooglePlacesAutocomplete
            placeholder='Where from ?'
            styles={
              {
                container:{
                  flex:0
                },
                textInput:{
                  fontSize:18
                }
              }
            }
            // set the query to google maps
            onPress={(data, details = null) => {
              if (details) {
                const { geometry: { location } = {}, description } = details;
                if (location && description) {
                  dispatch(setOrigin({ location, description }));
                }
              }
            }}
            
            
            
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            query={
              {
                key:GOOGLE_MAPS_APIKEY,
                language:"en"
              }
            }

            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
      </View>
      <View style={tw `pl-3`}>
      <NavOption/>
      <NavFavourites/>
      </View> 
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})