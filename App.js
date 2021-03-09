import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import LoginNavigator from './routes/loginStack'


export default function App() {
  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LoginNavigator />
    );
  }
};

