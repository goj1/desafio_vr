import React from 'react';
import {Platform} from 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {
  USERNAME_LABEL,
  MATERIAL_ICONS,
  PASSWORD_LABEL,
} from '../../utils/Constant';
import InputDesafio from '../components/InputDesafio';

describe('InputText', () => {
  it('should render the Input Text', () => {
    render(<InputDesafio
      label={USERNAME_LABEL}
      variant={'outlined'}
      iconNameLeading={'person'}
      iconType={MATERIAL_ICONS}
      leading={true}
      isPass={false}
      value={'usertest'}
      keyboardType={'default'}
      platform={Platform.OS}
    />);

    expect(screen.getByText(USERNAME_LABEL)).toBeTruthy();
    expect(screen.getByTestId('iconLeadingInput')).toBeTruthy();
  });

  it('should render the Input Text without leading', () => {
    render(<InputDesafio
      label={USERNAME_LABEL}
      variant={'outlined'}
      iconNameLeading={'person'}
      iconType={MATERIAL_ICONS}
      leading={false}
      isPass={false}
      value={'usertest'}
      keyboardType={'default'}
      platform={Platform.OS}
    />);

    expect(screen.getByText(USERNAME_LABEL)).toBeTruthy();
    expect(screen.queryByText('iconLeadingInput')).toBeNull();
  });

  it('should not render the Input Text without leading', () => {
    render(<InputDesafio
      labell={USERNAME_LABEL}
      variant={'outlined'}
      iconNameLeading={'person'}
      iconType={MATERIAL_ICONS}
      leading={false}
      isPass={false}
      value={'usertest'}
      keyboardType={'default'}
      platform={Platform.OS}
    />);

    expect(screen.queryByText(USERNAME_LABEL)).toBeNull();
  });

  it('should render the Input Password', () => {
    render(<InputDesafio
      label={PASSWORD_LABEL}
      variant={'outlined'}
      iconType={MATERIAL_ICONS}
      iconNameLeading={'mail'}
      leading={true}
      trailing={true}
      isPass={true}
      showPass={true}
      iconNameTrailing={1 === 1 ? 'visibility' : 'visibility-off'}
      value={'112233'}
      platform={Platform.OS}
    />);

    expect(screen.getByText(PASSWORD_LABEL)).toBeTruthy();
    expect(screen.getByTestId('iconLeadingInput')).toBeTruthy();
    expect(screen.getByTestId('iconTrailingInput')).toBeTruthy();
    expect(screen.getByTestId('iconButtonTrailingInput')).toBeTruthy();
  });

  it('should render the Input Text and change value', () => {
    const onChangeTextMock = jest.fn();
    const DEFAULT_VALUE = 'desafio';

    render(<InputDesafio
      label={USERNAME_LABEL}
      variant={'outlined'}
      iconNameLeading={'person'}
      iconType={MATERIAL_ICONS}
      leading={false}
      isPass={false}
      keyboardType={'default'}
      platform={'android'}
      changeText={onChangeTextMock}
    />);

    fireEvent(screen.getByText(USERNAME_LABEL), 'onChangeText', DEFAULT_VALUE);
    expect(onChangeTextMock).toHaveBeenCalledWith(DEFAULT_VALUE);
  });
});
