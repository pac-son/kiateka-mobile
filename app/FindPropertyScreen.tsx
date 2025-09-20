import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import PropertyHeader from "./components/PropertyHeader";
import PropertyFilter from "./components/PropertyFilter";
import PropertyCard from "./components/PropertyCard";

export default function FindPropertyScreen() {
  
  return (
    <View style={styles.container}>
      <PropertyHeader/>
      <PropertyFilter/>
      <PropertyCard/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  button: { 
    backgroundColor: "black", 
    padding: 12, 
    borderRadius: 8 
  },
  buttonText: { 
    color: "white", 
    fontSize: 16 
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  closeBtn: {
    marginTop: 15,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
  },
});
