import React from 'react';
import {ScrollView} from 'react-native';

import Swiper from 'react-native-swiper';

import SelecteUserType from './Step1';
import BasicInformationUser from './Step2';
import IntroEnterpriseInformation from './Step3';
import BasicInformationsEnterprise from './Step4';
import ScheduleInformation from './Step5';

const SwiperComponent = () => {
  return (
    <Swiper loop={false}>
      <SelecteUserType />
      <BasicInformationUser />
      <IntroEnterpriseInformation />
      <BasicInformationsEnterprise />
      <ScheduleInformation />
    </Swiper>
  );
};

export default SwiperComponent;
