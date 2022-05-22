import React from 'react';
import {useDispatch} from 'react-redux';
import {openModalSignOut} from '../store/modules/navigation/actions';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/atoms/TabBottomIconNavigation';

import {COLORS} from '../common';

import Dashboard from '../screens/Dashboard';
import PurchasePass from '../screens/PurchasePass';
import SignOut from '../screens/SignOut';

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
          height: 64,
          backgroundColor: COLORS['green-dark'],
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
        name="Recarga"
        component={PurchasePass}
        options={{
          tabBarIcon: () => <TabBarIcon icon="history-icon" label="recarga" />,
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
