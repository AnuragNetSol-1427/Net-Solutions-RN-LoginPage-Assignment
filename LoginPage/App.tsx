import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Alert
} from 'react-native';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  return (
        // <KeyboardAvoidingView>
    <View style={styles.parentContainer}>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.loginTaglineContainer}>
            <Text style={styles.tagline}>
              By Signing in you are agreeging with our <Text style={styles.tmcColor}>Terms and Privacy Policy</Text>
            </Text>
        </View>
        <>
          <View style={styles.inputView}>
            <Image style={styles.emailImg} source={require('./assets/email.png')} />
            <TextInput style={styles.textinput} placeholder='Email' placeholderTextColor={'black'} />
          </View>
          <View style={styles.inputView}>
            <Image style={styles.emailImg} source={require('./assets/password.png')} />
            <TextInput style={styles.textinput} placeholder='Password' placeholderTextColor={'black'} />
          </View>
          <Pressable onPress={()=>{Alert.alert("Forgot Password Screen")}} style={styles.forgotPwdView}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </Pressable>
      </>
      <Pressable onPress={()=>{Alert.alert("Submitted Successfully")}} style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>

      <View style={styles.socialConnectionDiv}>
            <Text style={styles.socialConnectionText}>
             or connect with
             </Text>
        </View>

        <View style={styles.socialNetworkView}>
            <Image source={require('./assets/fb.png')} />
            <Image source={require('./assets/twitter.png')} />
            <Image source={require('./assets/pinterest.png')} />
            <Image source={require('./assets/linkedin.png')} />
        </View>

      <View style={styles.loginPageImg}>
        <Image source={require('./assets/loginPageImage.png')} />
      </View>



      </View>

      
      
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'grey',
  },
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
  inputView: {
    // flex: 1,
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    // height: '10%',
  },
  emailImg: {
    width: '10%',
    height: '10%',
    backgroundColor: 'white',
    padding: '7%',
  },
  textinput: {
    backgroundColor: 'white',
    flex: 1,
    height: '80%',
  },
  forgotPwdView: {
    // backgroundColor: 'orange',
    width: '80%',
    height: '3%',
    marginTop: '2%',
    alignItems: 'flex-end',
  }, 
  forgotText: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: '3%',
  },
  submitBtn: {
    marginTop: '3%',
    backgroundColor: 'skyblue',
    width: '60%',
    // height: '3%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  submitText: {
    fontSize: 20,
    fontWeight: 500,
  },
  socialConnectionDiv: {
    // backgroundColor: 'red',
    marginTop: '1%',
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
    // marginTop: '1%'
  },
  socialImg: {
    // width: '100%',
    // height: '50%',
  },
  loginPageImg: {
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
