import React, {useState} from 'react';
import {View} from 'react-native';
import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import IconButton from '../../components/atoms/Button/Icon';
import {COLORS} from '../../common';

const TariffData = [
  {id: 0, amount: 1, price: 1.35},
  {id: 0, amount: 2, price: 2.7},
  {id: 0, amount: 3, price: 1.35},
  {id: 0, amount: 4, price: 31.35},
  {id: 0, amount: 5, price: 21.35},
  {id: 0, amount: 6, price: 51.35},
  {id: 0, amount: 7, price: 41.35},
  {id: 0, amount: 8, price: 31.35},
  {id: 0, amount: 9, price: 21.35},
  {id: 0, amount: 10, price: 551.35},
];

function Home({navigation}) {
  const [totalPages, setTotalPages] = useState(10);
  const [pageCount, setPageCount] = useState(1);

  const incrementPage = () => {
    setPageCount(pageCount + 1);
    if (pageCount >= totalPages) {
      setTotalPages(totalPages + 10);
    }
  };

  const decrementPage = () => {
    setPageCount(pageCount - 1);

    if (pageCount < totalPages && totalPages > 10) {
      setTotalPages(totalPages - 10);
    }
  };

  return (
    <Container padding={30}>
      <StyledContainer direction="row" align="center">
        <IconButton
          icon="arrow-left-green"
          width={21}
          height={21}
          onPress={() => navigation.goBack()}
        />
        <View style={{padding: 14}} />
        <Label color="green-dark">Tarifas</Label>
      </StyledContainer>
      <View style={{padding: 14}} />
      <Table />
      <View style={{padding: 10}} />
      <StyledContainer direction="row" align="center" justify="space-between">
        <IconButton
          icon="arrow-left"
          background="green-default"
          padding={16}
          radius={6}
          onPress={decrementPage}
        />

        <StyledContainer
          direction="row"
          width={20}
          justify="space-between"
          align="center">
          <Label variant="body4" color="green-default">
            {pageCount}
          </Label>
          <Label variant="body4" color="gray-300">
            de
          </Label>
          <Label variant="body4" color="green-default">
            {totalPages}
          </Label>
        </StyledContainer>

        <IconButton
          icon="arrow-right"
          background="green-default"
          onPress={incrementPage}
          padding={16}
          radius={6}
        />
      </StyledContainer>
    </Container>
  );
}

const Table = () => {
  const Lines = TariffData.map(tariff => {
    return <Line tariff={tariff} />;
  });
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: COLORS['green-default'],
          width: '100%',
          height: 46,
          alignItems: 'center',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}>
        <StyledContainer width={50} justify="center" align="center">
          <Label color="white-light" variant="body1">
            Quantidade
          </Label>
        </StyledContainer>
        <StyledContainer width={50} justify="center" align="center">
          <Label color="white-light" variant="body1">
            Valor
          </Label>
        </StyledContainer>
      </View>
      {Lines}
    </View>
  );
};

const Line = ({tariff}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: COLORS['white-light'],
        width: '100%',
        alignItems: 'center',
        borderBottomColor: COLORS['white-dark'],
        borderBottomWidth: 1,
      }}>
      <Col value={tariff.amount} />
      <Col value={tariff.price} />
    </View>
  );
};

const Col = ({value}) => {
  return (
    <StyledContainer width={50} justify="center" align="center">
      <View
        style={{
          height: 42,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRightColor: COLORS['white-dark'],
          borderRightWidth: 1,
        }}>
        <Label variant="body1" color="gray-800">
          {value}
        </Label>
      </View>
    </StyledContainer>
  );
};

export default Home;
