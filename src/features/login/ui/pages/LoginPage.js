import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HStack} from 'react-native-flex-layout';
import ButtonDesafio from '../../../../shared/ui/components/ButtonDesafio';
import ImageDesafio from '../../../../shared/ui/components/ImageDesafio';
import {TAMANHO_IMG_1} from '../../../../shared/utils/Constant';
import InputDesafio from '../../../../shared/ui/components/InputDesafio';
import {
  M,
  USERNAME_LABEL,
  PASSWORD_LABEL,
  BTN_LOGIN_LABEL,
  MATERIAL_ICONS,
} from '../../../../shared/utils/Constant';
import {
  loginAction,
  setUserAction
} from '../../domain/repositories/LoginActions';
import {useSelector, useDispatch} from 'react-redux';

function Login() {
  const [showPass, setShowPass] = useState(false);
  const { user, isLoading } = useSelector(state => state.login);

  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={styles.containerView}
          >
            <HStack center>
              <ImageDesafio
                pathImage={require('../../../../../img/logo_round.png')}
                size={TAMANHO_IMG_1}
              />
            </HStack>

            <HStack center>
              <InputDesafio
                label={USERNAME_LABEL}
                variant={'outlined'}
                iconNameLeading={'person'}
                iconType={MATERIAL_ICONS}
                leading={true}
                isPass={false}
                value={user.username}
                platform={Platform.OS}
                keyboardType={'default'}
                changeText={value => dispatch(setUserAction({ username: value.toLowerCase() }))}
              />
            </HStack>

            <HStack center>
              <InputDesafio
                label={PASSWORD_LABEL}
                variant={'outlined'}
                iconNameLeading={'vpn-key'}
                type={MATERIAL_ICONS}
                leading={true}
                trailing={true}
                isPass={true}
                showPass={showPass}
                iconNameTrailing={showPass ? 'visibility' : 'visibility-off'}
                iconType={MATERIAL_ICONS}
                value={user.password}
                platform={Platform.OS}
                onPressTrailing={() => {
                  setShowPass(!showPass);
                }}
                changeText={(value => {
                  dispatch(setUserAction({ password: value }));
                })}
              />
            </HStack>

            <HStack center>
              <ButtonDesafio
                title={BTN_LOGIN_LABEL}
                size={M}
                loading={isLoading}
                pressed={async () => {
                  dispatch(loginAction({ username: user.username, password: user.password }));
                }}
              />
            </HStack>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    verticalAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: '95%',
  },
});

export default Login;
