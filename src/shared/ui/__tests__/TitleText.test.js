import React from 'react';
import {render, screen } from '@testing-library/react-native';
import BodyTextDesafio from '../components/BodyTextDesafio';
import TitleTextDesafio from '../components/TitleTextDesafio';

describe('TitleTextDesafio', () => {
  const DEFAULT_TEXT= 'Texto padrão.';
  it('should render the titile text', () => {
    render(<TitleTextDesafio text={DEFAULT_TEXT} />)

    expect(screen.getByText(DEFAULT_TEXT)).toBeTruthy();
    expect(screen.queryByText('')).toBeNull();
  });
});
