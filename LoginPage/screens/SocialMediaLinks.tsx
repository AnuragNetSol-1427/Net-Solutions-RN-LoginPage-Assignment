import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SocialMediaLinks = () => {
  return (
    <>
     <View style={styles.socialConnectionDiv}>
            <Text style={styles.socialConnectionText}>
             or connect with
             </Text>
        </View>

        <View style={styles.socialNetworkView}>
            <Image source={require('../assets/fb.png')} />
            <Image source={require('../assets/twitter.png')} />
            <Image source={require('../assets/pinterest.png')} />
            <Image source={require('../assets/linkedin.png')} />
        </View>
        </>
  )
}

export default SocialMediaLinks

const styles = StyleSheet.create({
    socialConnectionDiv: {
        // backgroundColor: 'red',
        marginTop: '8%',
      },
      socialConnectionText: {
        fontSize: 15,
      },
      socialNetworkView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        width: '55%',
        // height: '80%',
        justifyContent: 'space-between',
        marginTop: '3%'
      },
})