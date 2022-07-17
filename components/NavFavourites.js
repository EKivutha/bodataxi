import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Icon } from 'react-native-vector-icons/Icon'
import tw from 'twrnc';

data = [
    {
        id: '1',
        icon: 'home',
        location: 'Home',
        destination: 'Muthini'
    },
    {
        id: '2',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Kyama'
    }
]

export default function NavFavourites() {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={tw`bg-gray-200`} />}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity
                    onPress={handlePress}
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color='white'
                        size={18}
                    />
                    <View style={tw`font-semibold text-lg`}>{location}</View>
                    <View style={tw`text-gray-500`}>{destination}</View>

                </TouchableOpacity>
            )}

        />

    )
}