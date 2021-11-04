import React from "react";
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import NavOptions from "../components/NavOptions";

export default HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View>
                <Image
                    style={{
                        width: 120,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={require('../assets/boda1.png')}
                />
            </View>
            <NavOptions/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
