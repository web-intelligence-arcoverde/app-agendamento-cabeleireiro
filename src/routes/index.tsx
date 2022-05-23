import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';

import SignUpStep1 from '../screens/SignUp/Step1';
import SignUpStep2 from '../screens/SignUp/Step2';
import SignUpStep3 from '../screens/SignUp/Step3';
import SignUpStep4 from '../screens/SignUp/Step4';

import DashboardTabBarNavigation from './TabBarNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="SignUpStep1" component={SignUpStep1} />
        <Stack.Screen name="SignUpStep2" component={SignUpStep2} />
        <Stack.Screen name="SignUpStep3" component={SignUpStep3} />
        <Stack.Screen name="SignUpStep4" component={SignUpStep4} />

        <Stack.Screen name="Dashboard" component={DashboardTabBarNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
