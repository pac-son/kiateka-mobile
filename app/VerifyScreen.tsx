import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

export default function VerifyScreen() {
  const router = useRouter()

  const [counter, setCounter] = useState(58);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('./ProfileScreen');
    }, 3000)

    return () => clearTimeout(timer);
  }, [router]);

  return (
     <View style={styles.container}>
      <Text style={styles.heading}>Verify Phone Number</Text>
      <Text style={styles.text}>We have sent you an OTP on your phone Number. Please enter that below to confirm your identity.</Text>

      <Text style={styles.otpText}>Enter OTP</Text>
      <View style={styles.otpPinContainer}>
        {[0,1,2,3].map((i) => (
          <TextInput
          key={i}
          style={styles.optPin}
          keyboardType='number-pad'
          maxLength={1}/>
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resentTime}>Resend OTP in {counter} Seconds </Text>
        <TouchableOpacity disabled={counter > 0} >
          <Text style={[styles.resendLink, {opacity:counter > 0 ? 0.5 : 1}]}>Resend Text</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    marginBottom: 25,
  },
  otpText: {
    fontSize: 14,
    paddingBottom:10
  },
  otpPinContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom: 20
  },
  optPin: {
    paddingVertical:15,
    paddingHorizontal:30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#4b4b4b",
    borderRadius:8
  },
  resendContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent:"space-between",
  },
  resentTime:{
    fontSize:14,
  },
  resendLink:{
    color:"#a8cd00",
    textDecorationLine:"underline",
    textDecorationColor:"#a8cd00",
    textDecorationStyle:"solid",

  }
})