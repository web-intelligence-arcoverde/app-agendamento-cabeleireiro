import React from 'react';

import {StyledContainer} from '../../atoms/Container';

import ContainerDate from './ContainerDate';
import PriceInformation from './ContainerBasicInformation';

const ContainerInformations = ({item}) => {
  return (
    <StyledContainer direction="row">
      <PriceInformation item={item} />
      <ContainerDate item={item} />
    </StyledContainer>
  );
};

export default ContainerInformations;
