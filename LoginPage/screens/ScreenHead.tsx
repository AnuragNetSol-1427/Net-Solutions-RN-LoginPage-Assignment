import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScreenHead = () => {
  return (
    <>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.loginTaglineContainer}>
            <Text style={styles.tagline}>
              By Signing in you are agreeging with our <Text style={styles.tmcColor}>Terms and Privacy Policy</Text>
            </Text>
        </View>
    </>
  )
}

export default ScreenHead

const styles = StyleSheet.create({
    loginHeading: {
        fontSize: 35,
        color: 'black',
        marginTop: '10%',
        // backgroundColor: 'red',
      },
      loginTaglineContainer: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '60%',
        marginTop: '3%'
      },
      tagline: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      tmcColor: {
        color: 'skyblue',
      },
})