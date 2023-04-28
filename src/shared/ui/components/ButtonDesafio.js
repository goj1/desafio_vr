import React from 'react';
import {Button} from '@react-native-material/core';
import {S, M, L} from '../../utils/Constant';

const getSizeButton = (size) => {
  switch (size) {
    case S:
      return '';
    case M:
      return '50%';
    case L:
      return '95%';
  }
};

const ButtonDesafio = (props) => (
  <Button
    title={props.title}
    variant={props.type}
    loading={props.loading}
    disabled={props.loading}
    style={{
      minWidth: getSizeButton(props.size) === '' ? '15%' : getSizeButton(props.size),
      marginVertical: 8,
    }}
    onPress={props.pressed}
  />
);

export default ButtonDesafio;
