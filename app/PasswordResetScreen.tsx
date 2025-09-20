import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'

export default function PasswordResetScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Profile Picture</Text>
      <Text style={styles.longText}>We will send a link to reset password on your email address</Text>

      <View style={styles.subContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder='email@domain.com'
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue={email}
          keyboardType='email-address' />
      </View>

      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.setProfileBtn}
          onPress={() => router.push('/NewPassword')}
        >
          <Text style={styles.setProfileText}>Send Password Reset Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop:30 
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 15,
    textAlign: "left",
  },
  longText: {
    textTransform: "capitalize",
    paddingBottom: 30,
    fontSize: 18
  },
  subContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

  },
  label: {
    fontSize: 18
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#4b4b4b",
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 18
  },

  btnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
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
    textAlign: "center"
  },

});