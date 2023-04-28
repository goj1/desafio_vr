import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, IconButton} from '@react-native-material/core';

const InputDesafio = (props) => (
  <TextInput
    label={props.label}
    placeholder={props.label}
    variant={props.variant}
    leading={localPropos => props.leading ?
      <Icon
        testID={'iconLeadingInput'}
        name={props.iconNameLeading}
        type={props.iconType} {...localPropos}
      />
      :
      null
    }
    trailing={localPropos1 => props.trailing ?
      <IconButton
        testID={'iconButtonTrailingInput'}
        icon={localPropos2 => <Icon
          testID={'iconTrailingInput'}
          name={props.iconNameTrailing}
          type={props.iconType} {...localPropos2}
        />}
        {...localPropos1}
        onPress={props.onPressTrailing}
      />
      :
      null
    }
    keyboardType={props.keyboardType}
    onChangeText={(value) => props.changeText(value)}
    secureTextEntry={props.isPass && !props.showPass}
    value={props.value}
    style={{
      width: '95%',
      marginVertical: 4,
    }}
    inputStyle={{
      paddingTop: props.platform === 'android' && props.value !== '' ? 8 : 0,
    }}
    editable={props.editable}
  />
);

export default InputDesafio;
