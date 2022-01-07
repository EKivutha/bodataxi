import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CardList } from 'react-native-card-list/src/CardList'

const cards = [
    {
      id: "0",
      title: "Starry Night",
      picture: require('../assets/a&l.png'),
      content: <Text>Starry Night</Text>
    },
    {
      id: "1",
      title: "Wheat Field",
      picture: require('../assets/ttot macha.png'),
      content: <Text>Wheat Field with Cypresses</Text>
    },
    {
      id: "2",
      title: "Bedroom in Arles",
      picture: require('../assets/gelian.png'),
      content: <Text>Bedroom in Arles</Text>
    }
  ]

 const EatsScreen = () => {
    return (
        <View>
            <CardList cards={cards} />
        </View>)

}
export default EatsScreen