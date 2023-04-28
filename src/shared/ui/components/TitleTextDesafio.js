import React from 'react';
import {Text} from 'react-native';

const TitleTextDesafio = (props) => (
  <Text
  style={{
    fontSize: 18,
    fontWeight: 'bold',
  }}>
    {props.text}
  </Text>
);

export default TitleTextDesafio;
