import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';

import SignUpStep1 from '../screens/SignUp/Step1';
import SignUpStep2 from '../screens/SignUp/Step2';
import SignUpStep3 from '../screens/SignUp/Step3';
import SignUpStep4 from '../screens/SignUp/Step4';

import Details from '../screens/Details';
import Schedule from '../screens/Schedule';
import SuccessCreateSchedule from '../screens/SuccessCreateSchedule';

import ClientDetails from '../screens/ClientDetails';

import DashboardTabBarNavigation from './TabBarNavigation';

import DetailsAppointment from '../screens/AppointmentDetails';

import {openModalSignOut} from '../store/modules/navigation/actions';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();

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

        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Schedule" component={Schedule} />

        <Stack.Screen name="ClientDetails" component={ClientDetails} />

        <Stack.Screen name="AppointmentDetail" component={DetailsAppointment} />

        <Stack.Screen
          name="SuccessCreateSchedule"
          component={SuccessCreateSchedule}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              console.log('nem eu mesmo sei');
            },
          })}
        />

        <Stack.Screen name="Dashboard" component={DashboardTabBarNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
