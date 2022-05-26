import {View, Text, StyleSheet, Modal, Alert, Pressable} from 'react-native';
import React, {useState} from 'react';
import ProfileTag from '../../Components/ProfileTag';
import TaskBox from '../../Components/TaskBox';

const Welcome = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.welcome}>Welcome David</Text>
      <ProfileTag />
      {/* <TaskBox /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    margin: 15,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
export default Welcome;
