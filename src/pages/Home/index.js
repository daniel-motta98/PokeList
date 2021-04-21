import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';

import api from '../../services/api';

import * as S from './styles';

const Pokemon = () => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState([]);
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

  const PokemonRenderItem = item => {
    const {name, url} = item.item;

    const pokemonId = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');

    const pokemonURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
    return (
      <S.BoxFlatList>
        <S.ButtonInfoPokemon onPress={() => handleGetInfoPokemon(pokemonId)}>
          <S.ImagePokemon source={{uri: pokemonURL}} />
          <S.Text>{name}</S.Text>
        </S.ButtonInfoPokemon>
      </S.BoxFlatList>
    );
  };

  const handleGetInfoPokemon = async id => {
    navigation.navigate('InfoPokemon', {
      id: id,
    });
  };

  return (
    <S.Container>
      <Input placeholder="Busque o pokémon polo nome" />
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
