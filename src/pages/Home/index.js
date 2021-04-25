import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import {ActivityIndicator} from 'react-native';

import {show} from '../../config/Toast';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';

import api from '../../services/api';

import * as S from './styles';

const Pokemon = () => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loadingPagination, setLoadingPagination] = useState(true);
  const [currentPage, setCurrentPage] = useState(20);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await api.get(
          `/pokemon?offset=0&limit=${currentPage}`,
        );
        const {data} = response;

        setPokemon(data.results);
      } catch (err) {
        show({
          message: 'Ops, algo deu errado. 😕',
          description:
            'Erro ao carregar a página, verifique sua conexão com a internet ou tente novamente mais tarde.',
          type: 'danger',
        });
      } finally {
        setLoading(false);
        setLoadingPagination(false);
      }
    };
    getPokemon();
  }, [currentPage]);

  const handleButtonReadMore = () => {
    return (
      <S.BoxButtonLoadMore>
        {loadingPagination && (
          <ActivityIndicator size="small" color="#cecece" />
        )}

        {!loadingPagination && (
          <S.ButtonReadMore onPress={handleReadMore}>
            <S.LabelButtonReadMore>VER MAIS</S.LabelButtonReadMore>
          </S.ButtonReadMore>
        )}
      </S.BoxButtonLoadMore>
    );
  };

  const handleReadMore = () => {
    setCurrentPage(currentPage + 20);
    setLoadingPagination(true);
  };

  const handleGetInfoPokemon = async id => {
    navigation.navigate('InfoPokemon', {
      id: id,
    });
  };

  const searchPokemonName = pokemon.filter(item => {
    return item.name.indexOf(searchPokemon) >= 0;
  });

  const RenderItem = item => {
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

  const numColumns = 2;

  return (
    <>
      <S.Container>
        {loading && <S.LoadingIndicator size="large" color="#ccc" />}
        {!loading && (
          <>
            {searchPokemonName.length === 0 && (
              <S.LabelInfoSearchPokemonName>
                Clique em "ver mais" para carregar sua tela, se nenhum pokémon
                aparecer, significa que não temos ele cadastrado na nossa base
                de dados. 😕
              </S.LabelInfoSearchPokemonName>
            )}

            <Input
              placeholder="Busque o pokémon pelo nome"
              placeholderTextColor="#5e5e5e"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={text => setSearchPokemon(text)}
              value={searchPokemon}
            />

            <S.FlatListCustom
              data={searchPokemonName}
              keyExtractor={(item, index) => index.toString()}
              renderItem={RenderItem}
              ListFooterComponent={handleButtonReadMore}
              removeClippedSubviews={true}
              onEndReachedThreshold={0}
              numColumns={numColumns}
            />
          </>
        )}
      </S.Container>
    </>
  );
};

export default Pokemon;
