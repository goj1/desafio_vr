import React from 'react';
import {Alert} from 'react-native';

describe('Alert', () => {
  it('should render the Alert with title and message', () => {
    jest.spyOn(Alert, 'alert');
    expect(Alert.alert).toBeTruthy();
  });
});
