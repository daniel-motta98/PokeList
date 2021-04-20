import React, {useEffect, useState} from 'react';

import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';

import api from '../../services/api';

import * as S from './styles';

const Pokemon = () => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await api.get('/pokemon');
        const {data} = response;

        setPokemon(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPokemon();
  }, []);

  const PokemonRenderItem = ({item}) => {
    return (
      <S.BoxFlatList>
        <S.ButtonInfoPokemon onPress={handleGetInfoPokemon}>
          <S.Text>{item.name}</S.Text>
        </S.ButtonInfoPokemon>
      </S.BoxFlatList>
    );
  };

  const handleGetInfoPokemon = () => {
    navigation.navigate('InfoPokemon');
  };

  return (
    <S.Container>
      {loading && <S.LoadingIndicator size="large" color="#ccc" />}
      {!loading && (
        <S.FlatListCustom
          data={pokemon}
          ItemSeparatorComponent={() => <S.Separator />}
          keyExtractor={item => item.name.toString()}
          renderItem={PokemonRenderItem}
        />
      )}
    </S.Container>
  );
};

export default Pokemon;
