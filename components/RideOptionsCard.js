import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon, Image } from 'react-native-elements';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import IconImage from '../assets/truck.png';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const data = [
  {
    id: 'truck-X-123',
    title: 'Truck X size',
    image: require('../assets/truck.png'),
    multiplier: 1,
  },
  {
    id: 'truck-XL-456',
    title: 'Truck XL size',
    image: require('../assets/truck.png'),
    multiplier: 1.5,
  },
  {
    id: 'truck-XXL-456',
    title: 'Truck XXL size',
    image: require('../assets/truck.png'),
    multiplier: 2.0,
  },
];

const RideOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected]=useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigationCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item :{id, title, multiplier, image}, item}) => {
            return (
              <TouchableOpacity
              onPress={() =>setSelected(item)}
                style={tw `flex-row justify-between items-center px-10 ${id===selected?.id && "bg-gray-200"}`}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                  }}
                  source={image}
                />

                <View style={tw `-ml-4`}>
                  <Text style={tw `text-xl font-semibold`}>{title}</Text>
                  <Text>Travel time...</Text>
                </View>
                <Text style={tw `text-xl `}>
                    R20.00
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      
      <View >
        <TouchableOpacity
          disabled={!selected}
          style={tw `flex bg-black py-4 m-3 rounded-full ${!selected && "bg-gray-500"}`}
        >
            <Text style={tw `text-center text-white text-xl `} >
              Choose {selected?.title}
              </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptions;

const styles = StyleSheet.create({});