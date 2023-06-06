import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setDestination, setOrigin } from '../slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';




const NavigationCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw `text-center py-5 text-xl`}>Good morning Bweni</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
                placeholder='Where to ?'
                styles={inputContainer}
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                returnKeyType={"search"}
                onPress={(data, details=null)=>{
                        dispatch(
                            setDestination({
                                location: details.geometry.location,
                                description:data.description,
                            }));
                            navigation.navigate('RideOptionsCard')
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language:'en'
                }}
                debounce={400}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard

const inputContainer = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:20,
        flex:0,
    },
    textInput:{
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0, 
    }
})