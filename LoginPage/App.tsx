import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Form from './screens/Form';
import LoginFooterImage from './screens/LoginFooterImage';
import ScreenHead from './screens/ScreenHead';
import SocialMediaLinks from './screens/SocialMediaLinks';

const App = () => {
  return (
    <View style={styles.parentContainer}>
        <ScreenHead />
        <>
          <Form />
        </>
        <SocialMediaLinks />
        <LoginFooterImage />
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
});

export default App;
