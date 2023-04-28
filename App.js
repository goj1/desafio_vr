import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import Store from './src/shared/redux/store/Store';
import AppRootRoute from './src/shared/routes/AppRootRoute';

function App() {
  return (
    <Provider store={Store}>
      <PaperProvider>
        <AppRootRoute />
      </PaperProvider>
    </Provider>
  );
}

export default App;
