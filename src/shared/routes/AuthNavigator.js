import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../features/login/ui/pages/LoginPage';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
