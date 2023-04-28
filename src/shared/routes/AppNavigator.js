import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from '../../features/profile/ui/pages/ProfilePage';
import HomePage from '../../features/home/ui/pages/HomePage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'HomePage'} component={HomePage} />
      <Stack.Screen name={'ProfilePage'} component={ProfilePage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
