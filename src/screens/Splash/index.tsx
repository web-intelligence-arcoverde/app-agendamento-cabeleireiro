import React from 'react';

import Label from '../../components/atoms/Label';
import {LinearGradientContainer} from '../../components/atoms/Container';

const Splash = ({navigation}: any) => {
  setTimeout(Loading, 3000);

  function Loading() {
    navigation.navigate('SignIn');
  }

  return (
    <LinearGradientContainer justify="center" align="center">
      <Label color="white-default">Recarga Buss</Label>
    </LinearGradientContainer>
  );
};

export default Splash;
