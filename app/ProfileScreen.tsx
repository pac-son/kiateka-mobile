import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useRouter } from "expo-router";

const ProfilePic = require("../assets/images/profilepic.jpg");

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Profile Picture</Text>
      <Text style={styles.longText}>
        Set up your profile picture to help other users identify you
      </Text>
      <View style={styles.subContainer}>
        <View style={styles.imageBox}>
          <Image source={ProfilePic} style={styles.image} />
          <AntDesign name="edit" size={35} color="black" style={styles.icon} />
        </View>
        <TouchableOpacity>
          <Text style={styles.skipLink}>Skip for now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileBtnBox}>
        <TouchableOpacity
          style={styles.setProfileBtn}
          onPress={() => router.push("./PasswordResetScreen")}
        >
          <Text style={styles.setProfileText}>Set Profile Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 15,
    textAlign: "left",
  },
  longText: { 
    textTransform: "capitalize", 
    paddingBottom: 30 
  },
  subContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: "100%",
    objectFit: "cover",
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 70,
    bottom: 0,
    backgroundColor: "chartreuse",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
  },
  skipLink: {
    color: "#a8cd00",
    textDecorationLine: "underline",
    textDecorationColor: "#a8cd00",
    textDecorationStyle: "solid",
    textAlign: "center",
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 20,
  },
  profileBtnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  setProfileBtn: {
    backgroundColor: "#222222",
    width: "90%",
    paddingVertical: 10,
    borderRadius: 10,
  },
  setProfileText: {
    color: "beige",
    fontSize: 18,
    textAlign: "center",
  },
});
