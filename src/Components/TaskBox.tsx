import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {UserProfileNavigationProp} from '../Navigation/types';

const TaskBox = () => {
  const navigation = useNavigation<UserProfileNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Class')}>
          <Text style={styles.textBox}>Clases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.textBox}>Horario</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botBox}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.textBox}>Ranked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.textBox}>Anotaciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  topBox: {
    flexDirection: 'row',
    height: '40%',
  },
  botBox: {
    flexDirection: 'row',
    height: '40%',
  },
  box: {
    backgroundColor: '#A7CAA0',
    flex: 1,
    margin: 10,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  textBox: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TaskBox;
