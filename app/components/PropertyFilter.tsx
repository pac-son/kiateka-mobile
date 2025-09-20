import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Modals from './Modals';


export default function PropertyFilter() {
 const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Find Property</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.box}>
          <Feather name="sliders" size={18} color="black" style={styles.icon}/>
          <Text style={styles.text}>Filters</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>City</Text>
          <FontAwesome name="caret-down" size={16} color="black" />
        </View>
         <View style={styles.box}>
          <Text style={styles.text}>Price Range</Text>
          <FontAwesome name="caret-down" size={16} color="black" />
        </View>
         <TouchableOpacity style={styles.box} onPress={() => setVisible(true)}>
                 <Text style={styles.text}>Area Range</Text>
                 <FontAwesome name="caret-down" size={16} color="black" />
              </TouchableOpacity>

      </ScrollView>
      <Modals visible={visible} setVisible={setVisible}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:10,
    paddingHorizontal:30,
    marginTop:5
  },
  heading:{
    fontSize:18,
    fontWeight:400
  },
  scrollContainer:{
    paddingVertical:15,
    gap:10
  },
  box:{
    display:"flex",
    alignItems:"flex-end",
    flexDirection:"row",
    gap:5,
    paddingVertical:8,
    paddingHorizontal:18,
    borderWidth:1,
    borderRadius: 10
  },
  text:{
    fontSize:16,
    fontWeight:500
  },
  icon:{
    marginRight:10
  },
   

})