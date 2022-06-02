import React, {useState, useRef, useEffect} from 'react';

import Swiper from 'react-native-swiper';
import LayoutStep from './LayoutStep';

import Step01Image from '../../assets/images/intro-step-1.jpeg';
import Step02Image from '../../assets/images/salon-step-3.jpeg';
import Step04Image from '../../assets/images/intro-step-4.jpeg';

import {Container, StyledContainer} from '../../components/atoms/Container';
import Button from '../../components/atoms/Button/Contained/';

import {View} from 'react-native';

const mockIntro = [
  {
    img: Step01Image,
    text: 'Encontre barbeiros e salões facilmente em suas mãos',
  },
  {
    img: Step02Image,
    text: 'Reserve seu barbeiro ou salão favorito rapidamente',
  },
  {
    img: Step04Image,
    text: 'Venha ser bonito com a gente agora',
  },
];

export default function IntroSteps({navigation}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [buttonText, setButtonText] = useState('Proximo');

  console.log(activeIndex);

  const nextStep = () => {
    if (activeIndex === 2) {
      navigation.navigate('SignIn');
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  useEffect(() => {
    if (activeIndex === 2) {
      setButtonText('Vamos lá');
    } else if (activeIndex < 2) {
      setButtonText('Proximo');
    }
  }, [activeIndex]);

  return (
    <Container>
      <Swiper
        dot={
          <View
            style={{
              backgroundColor: '#C6C0CC',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#F19403',
              width: 32,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        loop={false}
        ref={swiperRef}
        onIndexChanged={idxActive => setActiveIndex(idxActive)}>
        {mockIntro.map(intro => {
          return (
            <LayoutStep key={intro.text} img={intro.img} text={intro.text} />
          );
        })}
      </Swiper>
      <StyledContainer padding={20}>
        <Button onPress={() => nextStep()}>{buttonText}</Button>
      </StyledContainer>
    </Container>
  );
}
