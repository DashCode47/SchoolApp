import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import React, {Children, useState, ReactNode} from 'react';
import BoxClasses from '../../Components/BoxClasses';
import Entypo from 'react-native-vector-icons/Entypo';
import FormikAddClass from './FormikAddClass';

interface IClass {
  tutor: string;
  materia: string;
  key: number | string;
}

const ClasesScrenn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setdata] = useState<IClass[]>([
    {materia: 'Matematicas', tutor: 'Profesor B.B legosa', key: 1},
  ]);

  const addPole = (pole: IClass) => {
    pole.key = Math.random().toString();
    setdata(actualData => {
      return [pole, ...actualData];
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FormikAddClass addPole={addPole} />
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.title}>Mis Clases</Text>
        <TouchableOpacity
          style={styles.iconPlus}
          onPress={() => setModalVisible(!modalVisible)}>
          <Entypo name="add-to-list" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <BoxClasses children={item.materia} tutor={item.tutor} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  iconPlus: {
    position: 'absolute',
    bottom: '10%',
    right: '7%',
  },
  //styles modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginVertical: 20,
    height: 300,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    padding: 35,
    shadowColor: '#000',
  },
  button: {
    padding: 10,
    elevation: 2,
    width: '100%',
    backgroundColor: 'maroon',
    marginBottom: 20,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
  },
});

export default ClasesScrenn;
