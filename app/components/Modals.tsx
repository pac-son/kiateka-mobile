import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ModalsProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export default function Modals({ visible, setVisible }: ModalsProps) {
   
  return (
    <Modal
                 transparent
                 animationType="slide"
                 visible={visible}
                 onRequestClose={() => setVisible(false)}
               >
                 <View style={styles.overlay}>
                   <View style={styles.content}>
                   <View style={styles.modalContent}>
                      <View style={styles.textBox}>
                      <Text style={styles.title}>Area Range</Text>
                     <TouchableOpacity>
                       <Text style={styles.yard}>5q Yard
                          <FontAwesome name="caret-down" size={12} color="white" style={styles.icon} />
                       </Text>
                     </TouchableOpacity>
                    </View>
                    
                     <TouchableOpacity
                       onPress={() => setVisible(false)}
                     >
                        <Ionicons name="close-circle" size={24} color="black" />
                     </TouchableOpacity>
                   </View>
   
                      <View style={styles.inputBox}>
                     <TextInput
                     placeholder='0' 
                     style={styles.input}/>
                     <Text style={styles.modalText}>To</Text>
                     <TextInput
                     placeholder='Any'
                     style={styles.input}/>
                   </View>
                   </View>
                  
                 </View>
               </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    width: "100%",
  },
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  modalContent:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  textBox:{
    display:"flex",
    flexDirection:"row",
    gap:30
  },
  yard:{
    backgroundColor:"#000000",
    borderRadius:5,
    paddingVertical:5,
    paddingHorizontal:12,
    color:"white"
  },
  icon:{
    paddingLeft:5
  },
  inputBox:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:30,
    marginTop:20
  },
  input:{
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:8,
    borderWidth:1,
  },
  modalText:{
    fontSize:16,
  }
})