import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderDesafio from '../../../../shared/ui/components/HeaderDesafio';
import {Surface} from '@react-native-material/core';
import {useSelector} from 'react-redux';
import TitleTextDesafio from '../../../../shared/ui/components/TitleTextDesafio';
import BodyTextDesafio from '../../../../shared/ui/components/BodyTextDesafio';
import ButtonDesafio from '../../../../shared/ui/components/ButtonDesafio';
import {
  M,
  HEADER_TITLE_LABEL,
  BTN_PERFIL_LABEL, PAGE_HOME_TITLE_LABEL,
} from '../../../../shared/utils/Constant';

const HomePage = () => {
  const navigation = useNavigation();
  const { user } = useSelector(state => state.login);

  return (
    <SafeAreaView>
      <HeaderDesafio
        title={PAGE_HOME_TITLE_LABEL}
        leading={false}
        trailing={true}
        actionTrailing={() => navigation.navigate('ProfilePage')}
        iconTrailing={user.image}
      />
      <View style={styles.container}>
        <Surface
          elevation={2}
          category={'medium'}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 200,
            height: 250,
            padding: 16,
          }}
        >
          <TitleTextDesafio text={'Página inicial do desafio VR'} />
          <BodyTextDesafio text={'Para acessar o seu perfil basta clicar no botão abaixo ou na foto de perfil.'} />
          <ButtonDesafio
            title={BTN_PERFIL_LABEL}
            size={M}
            pressed={() => navigation.navigate('ProfilePage')}
          />
        </Surface>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    verticalAlign: 'center',
    alignItems: 'center',
    background: '#FFFFFF'
  },
});

export default HomePage;
