import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, useRouter } from 'expo-router';

export default function NewPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
      <View style={styles.container}>
          <Text style={styles.heading}>Create New Password</Text>
          <Text style={styles.longText}>Make sure the password is a combination of alphabets, numbers, and symbols</Text>
    
          <View style={styles.subContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder='email@domain.com'
              onChangeText={newPassword => setPassword(newPassword)}
              defaultValue={password}
              secureTextEntry={true} />
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
            onPress={() => router.push('/FindPropertyScreen')}
          >
            <Text style={styles.setProfileText}>Send Password</Text>
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
  label:{
    fontSize: 18
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#4b4b4b",
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 18
  },
  
  btnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
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