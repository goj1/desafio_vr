import React from 'react';
import {render, screen} from '@testing-library/react-native';
import BodyTextDesafio from '../components/BodyTextDesafio';
import HeaderDesafio from '../components/HeaderDesafio';
import {PAGE_PERFIL_TITLE_LABEL} from '../../utils/Constant';

describe('Header', () => {
  const DEFAULT_TEXT = 'Texto padrão.';
  it('should render the Header of pages without leading and trainling and arrow back ios', () => {
    const onPressMock = jest.fn();

    render(<HeaderDesafio
        title={PAGE_PERFIL_TITLE_LABEL}
        leading={false}
        trailing={false}
        platform={'ios'}
        onPressBack={onPressMock}
      />,
    );

    expect(screen.getByText(PAGE_PERFIL_TITLE_LABEL)).toBeTruthy();
    expect(screen.queryByText('')).toBeNull();
  });

  it('should render the Header of pages with arrow back android', () => {
    const onPressMock = jest.fn();

    render(<HeaderDesafio
        title={PAGE_PERFIL_TITLE_LABEL}
        leading={true}
        trailing={false}
        platform={'android'}
        onPressBack={onPressMock}
      />,
    );

    expect(screen.getByText(PAGE_PERFIL_TITLE_LABEL)).toBeTruthy();
    expect(screen.getByTestId('iconLeadingHeader')).toBeTruthy();
  });

  it('should render the Header of pages without trainling', () => {
    const onPressMock = jest.fn();

    render(<HeaderDesafio
        title={PAGE_PERFIL_TITLE_LABEL}
        leading={true}
        trailing={false}
        platform={'ios'}
        onPressBack={onPressMock}
      />,
    );

    expect(screen.getByTestId('iconButtonLeadingHeader')).toBeTruthy();
    expect(screen.getByTestId('iconLeadingHeader')).toBeTruthy();
  });

  it('should render the Header of pages with trailing and avatar', () => {
    const onPressMock = jest.fn();

    render(<HeaderDesafio
        title={PAGE_PERFIL_TITLE_LABEL}
        leading={false}
        trailing={true}
        actionTrailing={onPressMock}
        platform={'android'}
        onPressBack={onPressMock}
      />,
    );

    // expect(screen.getByTestId('avatarTrailingHeader')).toBeTruthy();
    expect(screen.getByTestId('iconButtonTrailingHeader')).toBeTruthy();
    expect(screen.getByTestId('iconTrailingHeader')).toBeTruthy();
    expect(onPressMock).toBeTruthy();
  });
});
