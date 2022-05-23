import React, {Children, useState} from 'react';

import Swiper from 'react-native-swiper';

import SelecteUserType from './Step1';
import BasicInformationUser from './Step2';
import IntroEnterpriseInformation from './Step3';
import ScheduleInformation from './Step4';

const SwiperComponent = () => {
  const [userType, setUserType] = useState('');

  return (
    <Swiper loop={false}>
      <SelecteUserType setUserType={setUserType} userType={userType} />
      <BasicInformationUser userType={userType} />
      <IntroEnterpriseInformation />
      <ScheduleInformation />
    </Swiper>
  );
};

export default SwiperComponent;
