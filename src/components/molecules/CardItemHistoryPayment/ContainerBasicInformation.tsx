import React from 'react';
import {StyledContainer} from '../../atoms/Container';

import Separator from '../../atoms/Separator';

import Label from '../../atoms/Label';

const PriceInformation = ({item}) => {
  return (
    <StyledContainer width={50}>
      <Label variant="body4" color="green-dark">
        #{item.id}
      </Label>

      <Separator width={4} />

      <Label variant="body4" color="green-dark">
        Lucas
      </Label>
      <Separator width={2} />
      <Label variant="body2" color="green-dark">
        12:30
      </Label>
    </StyledContainer>
  );
};

export default PriceInformation;
