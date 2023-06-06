import { FlatList, StyleSheet, Image, Text,TouchableOpacity, View } from 'react-native'

import tw from "tailwind-react-native-classnames";

import IconImage from '../assets/icon2.png';
import React from 'react'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import { selectOrigin } from '../slices/navSlice';


//Define the 2 components for truc and another one
//This taakes an array of 2 elements
const data =[
    {
        id: "123",
        title: "Request truck",
        image:require("../assets/favicon.png"),
        screen:"MapScreen"
    }, {
        id: "456",
        title: "Order food",
        image:require("../assets/favicon.png"),
        screen:"EatScreen"
    }
]

const NavOption = () => {
    const navigation = useNavigation();
    // const origin = useSelector(selectOrigin);
  return (
   <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}  
    renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>navigation.navigate(item.screen)
        }
        style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        // disabled={!origin}
        >
            
            <View >
                {/* styles={tw `${!origin && "opacity-20"}`} */}
                <Image 
                styles={styles.tinyPicture}
                source={item.image}
                />
                <Text style={tw ` p-1 mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                    style={tw `p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" 
                    color="white" 
                    type="antdesign"    
                />
                 
            </View>
        </TouchableOpacity>
    )
    }
   />
  )
}

export default NavOption

const styles = StyleSheet.create({
    tinyPicture:{ 
        height: 120,
        width:120,
        resizeMode: "contain"
    }
})