import React from 'react';
import {render, screen } from '@testing-library/react-native';
import BodyTextDesafio from '../components/BodyTextDesafio';

describe('BodyTextDesafio', () => {
  const DEFAULT_TEXT= 'Texto padrão.';
  it('should render the body text', () => {
    render(<BodyTextDesafio text={DEFAULT_TEXT} />)

    expect(screen.getByText(DEFAULT_TEXT)).toBeTruthy();
    expect(screen.queryByText('')).toBeNull();
  });
});
