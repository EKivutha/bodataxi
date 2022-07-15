import React from 'react'
import { Icon } from "react-native-elements";
import { FlatList,TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc';
import al from "../assets/al.png"
import ttot from "../assets/ttotmacha.png"
import gelian from "../assets/gelian.png"
import MenuScreen from './MenuScreen';
import {useNavigation} from '@react-navigation/core'
const cards = [
    {
      id: "0",
      title: "A & L",
      picture: Image.resolveAssetSource(al).uri,
    },
    {
      id: "1",
      title: "T Tot Hotel",
      picture: Image.resolveAssetSource(ttot).uri,
    },
    {
      id: "2",
      title: "Gelian",
      picture: Image.resolveAssetSource(gelian).uri,
    }
  ]

 const EatsScreen = () => {
  const navigation = useNavigation();
    return (
        <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        vertical
        style ={tw`mt-15`}
        renderItem={({ item }) =>
            <TouchableOpacity style={tw`p-6 my-2 mx-8 pb-8 rounded-lg pt-4 bg-gray-200 w-80 h-60`}
            onPress={() => navigation.navigate("MenuScreen")}>
                <View>
                    <Image
                        style={{
                            width: 300,
                            height: 120,
                            resizeMode: "contain"
                        }}
                        source={{ uri: item.picture }}
                    />
                    <Text style={tw`mt-2 text-center text-lg font-semibold`} >{item.title}</Text>
                    <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" color="white" type="antdesign" />
                </View>
            </TouchableOpacity>
        }

    />
    )

}
export default EatsScreen