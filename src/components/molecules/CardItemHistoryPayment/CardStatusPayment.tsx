import React from 'react';
import Icon from '../../atoms/Icon';
import {COLORS} from '../../../common';

const paymentTypes = {
  pending: {icon: 'pending-icon', color: COLORS['gray-100']},
  cancel: {icon: 'pending-icon', color: COLORS['red-light']},
  confirmation: {
    icon: 'pending-icon',
    color: COLORS['green-light'],
  },
};

import {CardContainer} from './style';

const CardStatusPayment = ({statusPayment}) => {
  const {color, icon} = paymentTypes[statusPayment];

  return (
    <CardContainer color={color}>
      <Icon icon={icon} width={33} height={33} />
    </CardContainer>
  );
};

export default CardStatusPayment;
