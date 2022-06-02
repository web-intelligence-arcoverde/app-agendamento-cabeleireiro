import React from 'react';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import Button from '../../components/atoms/Button/Contained/';

import {Image} from 'react-native';

import BackgrondImg from '../../assets/images/intro-step-1.jpeg';

import Separator from '../../components/atoms/Separator';
import {useNavigation} from '@react-navigation/native';

const Step1 = ({img, text}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={img} style={{width: '100%', height: 450}} />

      <Separator width={20} />

      <StyledContainer padding={20}>
        <StyledContainer align="center">
          <Label variant="h2" color="gray-600" textAlign="center">
            {text}
          </Label>
        </StyledContainer>

        <Separator width={40} />
      </StyledContainer>
    </Container>
  );
};

export default Step1;
