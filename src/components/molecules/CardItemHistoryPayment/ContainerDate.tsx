import React from 'react';

import Label from '../../atoms/Label';
import {StyledContainer} from '../../atoms/Container';

const DateInformation = ({item}) => {
  return (
    <StyledContainer>
      <Label variant="body2" color="green-dark">
        {item.date}
      </Label>
    </StyledContainer>
  );
};

export default DateInformation;
