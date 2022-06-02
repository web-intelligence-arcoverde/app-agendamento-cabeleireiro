import React from 'react';

import Label from '../../components/atoms/Label';

import Separator from '../../components/atoms/Separator';

import {View, ImageBackground} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};
import HairBackground from '../../assets/images/hair-splash.jpeg';

const Splash = ({navigation}: any) => {
  const myTimeout = setTimeout(goNextRouter, 3000);

  function goNextRouter() {
    navigation.navigate('IntroSteps');
  }

  return (
    <View style={{flex: 1, display: 'flex'}}>
      <ImageBackground
        source={HairBackground}
        resizeMode="cover"
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 22,
        }}>
        <Label>Bem vindo ao</Label>
        <Separator width={8} />
        <Label color="orange-100" variant="title">
          Beauty Hair
        </Label>
        <Separator width={8} />
        <Label variant="body1">
          o melhor aplicativo de barbeiro e salão neste século sua boa aparência
          e beleza
        </Label>
      </ImageBackground>
    </View>
  );
};

export default Splash;
