import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import { Icon } from "react-native-elements";
import boda from "../assets/boda.png"
import food from "../assets/food.png"
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
const data = [
    {
        id: "123",
        title: "Get a ride",
        image: Image.resolveAssetSource(boda).uri,
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: Image.resolveAssetSource(food).uri,
        screen: "EatsScreen"
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) =>
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 rounded-lg pt-4 bg-gray-200 m-2 w-40 h-60`}
                  onPress={() => navigation.navigate(item.screen)}>
                    <View 
                    style={tw`${!origin && "opacity-20"}`}
                    >
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: "contain"
                            }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                        <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            }

        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
