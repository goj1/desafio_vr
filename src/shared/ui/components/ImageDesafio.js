import React from 'react';
import {Image} from 'react-native';
import {
  TAMANHO_IMG_1,
  TAMANHO_IMG_2,
  TAMANHO_IMG_3,
  TAMANHO_IMG_4,
  TAMANHO_IMG_5,
  TAMANHO_IMG_6,
  TAMANHO_IMG_7,
  TAMANHO_IMG_8,
  TAMANHO_IMG_9,
  TAMANHO_IMG_10,
} from '../../utils/Constant';

const getImageSize = (size) => {
  switch (size) {
    case TAMANHO_IMG_1:
      return 100;
    case TAMANHO_IMG_2:
      return 200;
    case TAMANHO_IMG_3:
      return 300;
    case TAMANHO_IMG_4:
      return 400;
    case TAMANHO_IMG_5:
      return 500;
    case TAMANHO_IMG_6:
      return 600;
    case TAMANHO_IMG_7:
      return 700;
    case TAMANHO_IMG_8:
      return 800;
    case TAMANHO_IMG_9:
      return 900;
    case TAMANHO_IMG_10:
      return 1000;
  }
}

const ImageDesafio = (props) => {
  return(
    <Image
      testID={'imageComponentId'}
      source={props.pathImage}
      style={{
        width: getImageSize(props.size),
        height: getImageSize(props.size),
        marginVertical: 32,
      }}
    />
  );
}

export default ImageDesafio;
