import {Alert} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const usuario = await AsyncStorage.getItem('@usuario')
    return !!(usuario && usuario.token);
  } catch (e) {
    throw new Error('Ocorreu erro ao buscar informações do usuário.');
  }
}

export const isAuth = async () => {
  return getData()
    .then((value) => {
      return value
    })
    .catch((err) => {
      Alert.alert('Ops!', err.message);
    });
}
