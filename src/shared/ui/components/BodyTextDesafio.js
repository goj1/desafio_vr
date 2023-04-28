import React from 'react';
import {Text} from 'react-native';

const BodyTextDesafio = (props) => (
  <Text
    style={{
      fontSize: 16,
      fontWeight: '500',
    }}>
    {props.text}
  </Text>
);

export default BodyTextDesafio;
