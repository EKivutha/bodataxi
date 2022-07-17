import { View, Text, Image,SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import {Intl} from 'intl'
import { Icon } from "react-native-elements";
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "1",
        title: "",
        multiplier: "",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fillustration-motorcycle-red-color_1308-35859.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmotorbike%2F2&tbnid=0hCzVLOt8kEhqM&vet=12ahUKEwjQ_OWh2v34AhVCeRoKHeF-ABMQMygAegUIARDpAQ..i&docid=WMeVKjm32ZsswM&w=2000&h=1214&q=motorbike%20illustration&ved=2ahUKEwjQ_OWh2v34AhVCeRoKHeF-ABMQMygAegUIARDpAQ"
    },
    {
        id: "2",
        title: "",
        multiplier: "",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fillustration-motorcycle-red-color_1308-35859.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmotorbike%2F2&tbnid=0hCzVLOt8kEhqM&vet=12ahUKEwjQ_OWh2v34AhVCeRoKHeF-ABMQMygAegUIARDpAQ..i&docid=WMeVKjm32ZsswM&w=2000&h=1214&q=motorbike%20illustration&ved=2ahUKEwjQ_OWh2v34AhVCeRoKHeF-ABMQMygAegUIARDpAQ"
    },
    {
        id: "3",
        title: "",
        multiplier: "",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fillustration-motorcycle-red-color_1308-35859.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmotorbike%2F2&tbnid=0hCzVLOt8kEhqM&vet=12ahUKEwjQ_OWh2v34AhVCeRoKHeF-ABMQMygAegUIARDpAQ..i&docid=WMeVKjm32ZsswM&w=2000&h=1214&q=motorbike%20illustration&ved=2ahUKEwjQ_OWh2v34AhVCeRoKHeF-ABMQMygAegUIARDpAQ"
    }

]
export default function RideOptions() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const SURGE_CHARGE_RATE = 1.5
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                    style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
            </View>
            <Text style={tw`text-center py-5 text-xl`}>
                Select Vehicle -{travelTimeInformation?.distance.text}
            </Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    <TouchableOpacity
                        style={tw`flex-row justify-between items-center px-10
                ${id === selected?.id && "bg-gray-200"} `}
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: item.image }}
                        />
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{travelTimeInformation?.duration.text}Travel Time</Text>
                        </View>
                        {/* <Text>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: "KSH"
                            }).format(
                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}
                        </Text> */}
                    </TouchableOpacity>
                }}

            />
            <View>
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
                >
                    <Text
                        style={tw`text-center text-white text-xl`}
                    >
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}