import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import HeaderDesafio from '../../../../shared/ui/components/HeaderDesafio';
import {HStack} from 'react-native-flex-layout';
import {
  M,
  PAGE_PERFIL_TITLE_LABEL,
  TAMANHO_IMG_1,
  BTN_VOLTAR_LABEL,
  SEXO_LABEL,
  EMAIL_LABEL,
  USERNAME_LABEL,
  NAME_LABEL,
  BTN_SAIR_LABEL
} from '../../../../shared/utils/Constant';
import ImageDesafio from '../../../../shared/ui/components/ImageDesafio';
import {useSelector} from 'react-redux';
import InputDesafio from '../../../../shared/ui/components/InputDesafio';
import ButtonDesafio from '../../../../shared/ui/components/ButtonDesafio';
import {logoutAction} from '../../../login/domain/repositories/LoginActions';
import {useDispatch} from 'react-redux';

const ProfilePage = (props) => {
  const { user } = useSelector(state => state.login);
  const { navigation } = props;
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <HeaderDesafio
        title={PAGE_PERFIL_TITLE_LABEL}
        leading={true}
        trailing={false}
        platform={Platform.OS}
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <View
        style={styles.container}
      >
        <HStack center>
          <ImageDesafio
            pathImage={user.image.includes('http') ? {uri: user.image} : require('../../../../../img/logo_round.png')}
            size={TAMANHO_IMG_1}
          />
        </HStack>

        <HStack center>
          <InputDesafio
            label={NAME_LABEL}
            variant={'outlined'}
            leading={false}
            trailing={false}
            isPass={false}
            editable={false}
            platform={Platform.OS}
            value={`${user.firstName} ${user.lastName}`}
            keyboardType={'default'}
          />
        </HStack>

        <HStack center>
          <InputDesafio
            label={USERNAME_LABEL}
            variant={'outlined'}
            leading={false}
            trailing={false}
            isPass={false}
            editable={false}
            platform={Platform.OS}
            value={`${user.username}`}
            keyboardType={'default'}
          />
        </HStack>

        <HStack center>
          <InputDesafio
            label={EMAIL_LABEL}
            variant={'outlined'}
            leading={false}
            trailing={false}
            isPass={false}
            editable={false}
            platform={Platform.OS}
            value={`${user.email}`}
            keyboardType={'default'}
          />
        </HStack>

        <HStack center>
          <InputDesafio
            label={SEXO_LABEL}
            variant={'outlined'}
            isPass={false}
            leading={false}
            trailing={false}
            editable={false}
            platform={Platform.OS}
            value={`${user.gender}`}
            keyboardType={'default'}
          />
        </HStack>

        <HStack center>
          <ButtonDesafio
            title={BTN_VOLTAR_LABEL}
            size={M}
            pressed={async () => {
              navigation.goBack();
            }}
          />
        </HStack>

        <HStack center>
          <ButtonDesafio
            title={BTN_SAIR_LABEL}
            size={M}
            pressed={async () => {
              dispatch(logoutAction());
            }}
          />
        </HStack>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    verticalAlign: 'center',
  },
});

export default ProfilePage;
