import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const LoginFooterImage = () => {
  return (
    <>
        <View style={styles.loginPageImg}>
          <Image source={require('../assets/loginPageImage.png')} />
        </View>
    </>
  )
}

export default LoginFooterImage

const styles = StyleSheet.create({
    socialImg: {
        // width: '100%',
        // height: '50%',
      },
      loginPageImg: {
        // flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
})