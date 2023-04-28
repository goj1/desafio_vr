import React from 'react';
import {render, screen } from '@testing-library/react-native';
import BodyTextDesafio from '../components/BodyTextDesafio';
import ImageDesafio from '../components/ImageDesafio';
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
import IMAGE from '../../../../img/logo_round.png';

describe('BodyTextDesafio', () => {
  const IMAGE = require('../../../../img/logo_round.png');

  it('should render the Image size 1', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_1} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 2', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_2} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 3', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_3} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 4', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_4} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 5', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_5} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 6', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_6} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 7', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_7} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 8', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_8} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 9', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_9} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });

  it('should render the Image size 10', () => {
    render(<ImageDesafio pathImage={IMAGE} size={TAMANHO_IMG_10} />);

    expect(screen.getByTestId('imageComponentId')).toBeTruthy();
  });
});
