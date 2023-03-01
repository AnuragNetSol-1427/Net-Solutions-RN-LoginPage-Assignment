import React, { useState } from 'react'
import { StyleSheet, Image, Pressable, TextInput, View, Alert, Text } from 'react-native'

const Form = () => {
  const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validationFun = () => {
      if(email == '' && password == ''){
        Alert.alert("Form is blank");
      }
      else if(email == ''){
        Alert.alert("Email is blank");
      }
      else if(!emailRegEx.test(email)){
        Alert.alert("Email is not valid")
      }
      else if(password == ''){
        Alert.alert("Password is blank");
      }
      else if(!passwordRegEx.test(password)){
        Alert.alert("Password is not valid")
      }
    }
  return (
    <>
      <View style={styles.inputView}>
            <Image style={styles.emailImg} source={require('../assets/email.png')} />
            <TextInput style={styles.textinput} placeholder='Email' onChangeText={val => {setEmail(val)}} placeholderTextColor={'black'} />
          </View>
          <View style={styles.inputView}>
            <Image style={styles.emailImg} source={require('../assets/password.png')} />
            <TextInput style={styles.textinput} onChangeText={val => {setPassword(val)}}placeholder='Password' secureTextEntry placeholderTextColor={'black'} />
          </View>
          <Pressable onPress={()=>{Alert.alert("Forgot Password Screen")}} style={styles.forgotPwdView}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </Pressable>
          <>
          <Pressable onPress={validationFun} style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
          </>
    </>
  )
}

export default Form

const styles = StyleSheet.create({
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
})