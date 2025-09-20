import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PropertyHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.subContent}>
          <MaterialCommunityIcons
            name="home-circle-outline"
            size={24}
            color="white"
          />
          <Text style={styles.text}>HomeFinder</Text>
        </View>
        <View>
          <SimpleLineIcons name="picture" size={22} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20
  },
  subContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text:{
    color:"#ffffff",
    fontSize:16,
    fontWeight:100
  },
});
