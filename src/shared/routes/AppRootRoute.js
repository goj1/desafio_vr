import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const AppRootRoute = () => {
  const {user} = useSelector(state => state.login)

  return(
    <NavigationContainer>
      {
        user.isAuth ? <AppNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  );
}

export default AppRootRoute;
