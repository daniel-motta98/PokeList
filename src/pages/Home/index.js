import React, {useEffect, useState, useCallback} from 'react';
import {RefreshControl, TouchableOpacity, Text} from 'react-native';

import {show} from '../../config/Toast';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';

import api from '../../services/api';

import * as S from './styles';

const Pokemon = () => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      show({
        message: 'Sucesso!',
        description: 'Página atualizada com sucesso! 🎊 🎉',
        type: 'success',
      });
    });
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
      {/* <Input placeholder="Busque o pokémon pelo nome" /> */}
      {loading && <S.LoadingIndicator size="large" color="#ccc" />}
      {!loading && (
        <S.FlatListCustom
          data={pokemon}
          ItemSeparatorComponent={() => <S.Separator />}
          keyExtractor={item => item.url.toString()}
          renderItem={PokemonRenderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </S.Container>
  );
};

export default Pokemon;
