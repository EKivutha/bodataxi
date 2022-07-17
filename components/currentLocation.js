import { View, Text } from 'react-native'
import React from 'react'

const currentLocation = () => {
    constructor = (props) => {
        super(props);
        state = {
            myLocation: null
        };
    }

    componentDidMount = () => {
        this.getMyLocation();
    };

    getMyLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                myLocation: 'Permission denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            myLocation: JSON.stringify(location)
        });
    };
    return (
        <View>
            <Text>currentLocation</Text>
        </View>
    )
}

export default currentLocation