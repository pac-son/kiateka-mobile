import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

let properties = [
  {
    id: 1,
    time: "13 Hours Ago",
    rent: "Flat for Rent",
    price: "USD 70 Thousand",
    description: "Lorem ipsum dolor sit amet.",
    sqft: 200,
    bedroom: 2,
    bathroom: 2,
    image: require('../../assets/images/image1.jpg')
  },
  {
    id: 2,
    time: "13 Hours Ago",
    rent: "Flat for Rent",
    price: "USD 70 Thousand",
    description: "Lorem ipsum dolor sit amet.",
    sqft: 200,
    bedroom: 2,
    bathroom: 2,
    image: require('../../assets/images/image2.jpg')
  },
  {
    id: 3,
    time: "13 Hours Ago",
    rent: "Flat for Rent",
    price: "USD 70 Thousand",
    description: "Lorem ipsum dolor sit amet.",
    sqft: 200,
    bedroom: 2,
    bathroom: 2,
    image: require('../../assets/images/image3.jpg')
  },
  {
    id: 4,
    time: "13 Hours Ago",
    rent: "Flat for Rent",
    price: "USD 70 Thousand",
    description: "Lorem ipsum dolor sit amet.",
    sqft: 200,
    bedroom: 2,
    bathroom: 2,
    image: require('../../assets/images/image4.jpg')
  },
  {
    id: 5,
    time: "13 Hours Ago",
    rent: "Flat for Rent",
    price: "USD 70 Thousand",
    description: "Lorem ipsum dolor sit amet.",
    sqft: 200,
    bedroom: 2,
    bathroom: 2,
    image: require('../../assets/images/image5.jpg')
  }
]
export default function PropertyCard() {
  return (
    <FlatList
      data={properties}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ padding: 20 }}   // ensures spacing
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />

          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text>{item.time}</Text> |
              <Text>{item.rent}</Text>
            </View>
            <Text style={styles.price}>{item.price}</Text>
            <Text>{item.description}</Text>

            <View style={styles.col}>
              <View style={styles.row}>
                <MaterialIcons name="bed" size={18} color="black" />
                <Text>{item.bedroom}</Text>
              </View>

              <View style={styles.row}>
                <MaterialCommunityIcons name="shower" size={18} color="black" />
                <Text>{item.bathroom}</Text>
              </View>

              <View style={styles.row}>
                <MaterialIcons name="window" size={16} color="black" />
                <Text>{item.sqft} sqft</Text>
              </View>
              <View style={styles.fav}>
                <MaterialIcons name="favorite-border" size={18} color="black" />
              </View>
            </View>

            <View style={styles.btns}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                  <Ionicons name="chatbubble-outline" size={18} style={styles.icon} />
                  Quick Chat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                  <Feather name="phone" size={18} style={styles.icon} />
                  Call
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    gap: 20
  },
  image: {
    width: "35%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  textContainer: {
    paddingHorizontal: 5
  },
  col: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    gap: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 2
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fav: {
    paddingLeft: 5
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  btn: {
    borderWidth: 1,
    borderColor: "#a8cd00",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  btnText: {
    color: "#a8cd00",
  },
  icon: {
    marginRight: 5,
    color: "#a8cd00"
  }
})
