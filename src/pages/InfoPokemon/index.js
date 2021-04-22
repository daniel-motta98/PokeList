import React, {useState, useEffect} from 'react';

import {show} from '../../config/Toast';

import api from '../../services/api';

import * as S from './styles';

const InfoPokemon = ({route}) => {
  const [namePokemon, setNamePokemon] = useState('');
  const [heightPokemon, setHeightPokemon] = useState('');
  const [weightPokemon, setWeightPokemon] = useState('');
  const [abilityPokemon, setAbilityPokemon] = useState([]);
  const [baseExperiencePokemon, setBaseExperiencePokemon] = useState('');
  const [loading, setLoading] = useState(true);
  const {id} = route.params;

  useEffect(() => {
    const getInfoPokemon = async () => {
      try {
        const response = await api.get(`/pokemon/${id}`);

        const {data} = response;

        setNamePokemon(data.name);
        setHeightPokemon(data.height);
        setWeightPokemon(data.weight);
        setAbilityPokemon(data.abilities);
        setBaseExperiencePokemon(data.base_experience);
      } catch (err) {
        show({
          message: 'Ops, algo deu errado. 😕',
          description:
            'Erro ao carregar a página, verifique sua conexão com a internet ou tente novamente mais tarde.',
          type: 'danger',
        });
      } finally {
        setLoading(false);
      }
    };

    getInfoPokemon();
  }, [id]);

  const pokemonURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

  return (
    <S.Container>
      {loading && <S.LoadingIndicator size="large" color="#ccc" />}
      {!loading && (
        <>
          <S.BoxImagePokemon>
            <S.ImagePokemon source={{uri: pokemonURL}} />
          </S.BoxImagePokemon>
          <S.NamePokemon>{namePokemon}</S.NamePokemon>

          <S.BoxWeightAndHeightPokemon>
            <S.WeightPokemon>{heightPokemon}</S.WeightPokemon>
            <S.HeightPokemon>{weightPokemon}</S.HeightPokemon>
          </S.BoxWeightAndHeightPokemon>

          <S.BoxLabelWeightAndHeight>
            <S.LabelWeightPokemon>Peso</S.LabelWeightPokemon>
            <S.LabelHeightPokemon>Altura</S.LabelHeightPokemon>
          </S.BoxLabelWeightAndHeight>

          <S.BoxBaseExperiencePokemon>
            <S.ValueBaseExperiencePokemon>
              {baseExperiencePokemon}
            </S.ValueBaseExperiencePokemon>

            <S.BoxAbilityPokemon>
              {abilityPokemon.map((abilityPokemons, key) => {
                return (
                  <S.Text key={key}>{abilityPokemons.ability.name}</S.Text>
                );
              })}
            </S.BoxAbilityPokemon>
          </S.BoxBaseExperiencePokemon>

          <S.BoxLabelBaseExperiencePokemon>
            <S.LabelBaseExperiencePokemon>XP</S.LabelBaseExperiencePokemon>
            <S.LabelAbilityPokemon>Habilidade</S.LabelAbilityPokemon>
          </S.BoxLabelBaseExperiencePokemon>

          <S.LabelInfo>
            As informações apresentadas acima são de acordo com a base de dados
            pokeapi.co. Qualquer informação que esteja incorreta é de total
            responsabilidade da mesma.
          </S.LabelInfo>
        </>
      )}
    </S.Container>
  );
};

export default InfoPokemon;
