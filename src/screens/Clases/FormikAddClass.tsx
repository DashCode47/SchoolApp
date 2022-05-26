import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

interface IFormik {
  addPole: Function;
}
const FormikAddClass = ({addPole}: IFormik) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{materia: '', tutor: ''}}
        onSubmit={values => {
          addPole(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="nombre de la materia"
              onChangeText={props.handleChange('materia')}
              value={props.values.materia}
            />

            <TextInput
              style={styles.input}
              placeholder="ingrese nombre de tutor"
              onChangeText={props.handleChange('tutor')}
              value={props.values.tutor}
            />

            <Button title="hecho" color="green" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormikAddClass;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    width: '100%',
  },
});
