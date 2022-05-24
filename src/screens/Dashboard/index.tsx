import React, {useState} from 'react';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';

import SignOut from '../SignOut';
import Separator from '../../components/atoms/Separator';

import ContainerListEnterprises from '../../components/organisms/ContainerEnterpriseList';

const Home = ({navigation}: any) => {
  const [user, setUser] = useState('Lucas');

  return (
    <Container padding={30}>
      <Label color="purple-800">Olá {user}</Label>
      <Separator width={2} />

      <Label color="gray-500" variant="body1">
        Separamos alguns salões para você cuidar da sua beleza
      </Label>

      <Separator width={8} />

      <StyledContainer width={70}>
        <Label color="gray-600" variant="h2">
          Estabelecimentos
        </Label>
      </StyledContainer>
      <Separator width={8} />

      <ContainerListEnterprises navigation={navigation} />

      <SignOut navigation={navigation} />
    </Container>
  );
};

export default Home;
