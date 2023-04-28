import React from 'react';
import {render, screen } from '@testing-library/react-native';
import ButtonDesafio from '../components/ButtonDesafio';
import {
  M, S, L,
  BTN_LOGIN_LABEL,
  BTN_SAIR_LABEL,
} from '../../utils/Constant';

describe('Button', () => {
  it('should render the Button Midium', () => {
    render(<ButtonDesafio title={BTN_LOGIN_LABEL} size={M} />)

    expect(screen.getByText(BTN_LOGIN_LABEL)).toBeTruthy();
    expect(screen.queryByText(BTN_SAIR_LABEL)).toBeNull();
  });

  it('should render the Button Small', () => {
    render(<ButtonDesafio title={BTN_LOGIN_LABEL} size={S} />)

    expect(screen.getByText(BTN_LOGIN_LABEL)).toBeTruthy();
  });

  it('should render the Button Large', () => {
    render(<ButtonDesafio title={BTN_LOGIN_LABEL} size={L} />)

    expect(screen.getByText(BTN_LOGIN_LABEL)).toBeTruthy();
  });
});
