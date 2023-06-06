import { DevSettings, StyleSheet} from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination } from '../slices/navSlice';
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_APIKEY} from "@env"; 

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    // const mapRef = useRef(null);
    // useEffect(() =>{
    //         if(!origin || !description) return
    //         //zoom & fit to markers
    //         mapRef.current.fitToSuppliedMarkers(["origin", "destination"],{
    //           edgePadding:{
    //             top:50,
    //             right:50,
    //             bottom:50,
    //             left:50
    //           },
    //         })
    // }, [origin, destination])
  return (
    <MapView style={tw `flex-1`}
    mapType='mutedStandard'
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
 >
        {origin && destination && (
            <MapViewDirections
            origin ={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={2}
            strokeColor='green'

            />
        ) 
        }
        {origin?.location &&(
          <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
          />
        )}
        </MapView>
  );
};
  
export default Map;

const styles = StyleSheet.create({});