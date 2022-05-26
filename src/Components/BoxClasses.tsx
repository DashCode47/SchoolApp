import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import React, {Children, ReactNode} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

interface IBox {
  children: ReactNode;
  tutor: ReactNode;
}

const BoxClasses = ({children, tutor}: IBox) => {
  return (
    <TouchableOpacity style={styles.box} onPress={console.log('hi')}>
      <View style={styles.icons}>
        <Text style={styles.materia}>{children}</Text>
      </View>

      <View style={styles.icons}>
        <Text style={styles.tutor}>{tutor}</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.icon2}>
          <FontAwesome5 name="trash-alt" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon2}>
          <Entypo name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profContainer}>
        <Image
          source={require('../../assets/Images/profile2.jpg')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BoxClasses;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 8,
    height: 150,
    backgroundColor: '#1F6A59',
    borderRadius: 25,
    marginTop: 15,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  container: {
    backgroundColor: 'red',
  },
  materia: {
    fontSize: 30,
    color: 'white',
  },
  tutor: {
    fontSize: 13,
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    top: '10%',
    position: 'absolute',
    right: '5%',
  },
  bottom: {
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    borderTopWidth: 1,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  profContainer: {
    height: 60,
    marginTop: 10,
    borderWidth: 3,
    borderColor: 'pink',
    borderRadius: 50,
    aspectRatio: 1 / 1,
    flexDirection: 'row',
    position: 'absolute',
    left: '7%',
    bottom: '20 %',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 50,
    height: undefined,
    width: undefined,
  },
});
