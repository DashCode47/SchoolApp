import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProfileTag = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>David Lozada</Text>

      <Image
        source={require('../../assets/Images/medal.png')}
        style={styles.medal}
      />

      <View style={styles.numbers}>
        <View style={styles.profContainer}>
          <Image
            source={require('../../assets/Images/profile2.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.NumberBox}>
          <View style={styles.ContainerText}>
            <Text style={styles.numbersText}>45</Text>
            <Text style={styles.numberDescr}>numer</Text>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.numbersText}>85</Text>
            <Text style={styles.numberDescr}>8text</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Tasks</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.frase}>
        «Un buen maestro, como un buen actor, primero debe captar la atención de
        su audiencia y entonces puede enseñar su lección»
      </Text>
    </View>
  );
};

export default ProfileTag;

const styles = StyleSheet.create({
  container: {
    height: '39%',
    marginHorizontal: '5%',
    padding: '5%',
    borderRadius: 30,
    backgroundColor: '#22AE48',
    borderWidth: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    paddingLeft: '30%',
  },

  profContainer: {
    height: 60,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 50,
    aspectRatio: 1 / 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 50,
    height: undefined,
    width: undefined,
  },
  medal: {
    top: 15,
    right: -75,
    height: 80,
    position: 'absolute',
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttons: {
    height: 40,
    width: 100,
    backgroundColor: '#AE9222',
    borderRadius: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  buttonsText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  ContainerText: {
    flex: 0.3,
    alignItems: 'center',
  },
  numbers: {
    flexDirection: 'row',
  },
  numbersText: {
    fontSize: 20,

    color: 'white',
    fontWeight: '500',
    marginTop: 10,
  },
  numberDescr: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  NumberBox: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: '10%',
  },
  frase: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    marginTop: 7,
  },
});
