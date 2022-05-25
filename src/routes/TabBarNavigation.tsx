import React from 'react';
import {useDispatch} from 'react-redux';
import {openModalSignOut} from '../store/modules/navigation/actions';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/atoms/TabBottomIconNavigation';

import Dashboard from '../screens/Dashboard';
import SignOut from '../screens/SignOut';

import AppointmentHistory from '../screens/AppointmentHistory';

const Tab = createBottomTabNavigator();

const TabBarNavigation = () => {
  const disaptch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 66,
          backgroundColor: '#F4F2F5',
          borderTopColor: '#EBE8ED',
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Inicio"
        component={Dashboard}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Home" />,
        }}
      />

      <Tab.Screen
        name="Agenda"
        component={AppointmentHistory}
        options={{
          tabBarIcon: () => <TabBarIcon icon="time-icon" label="Agenda" />,
        }}
      />

      <Tab.Screen
        name="Sair"
        component={SignOut}
        options={{
          tabBarIcon: props => <TabBarIcon icon="leave-icon" label="sair" />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            disaptch(openModalSignOut());
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
