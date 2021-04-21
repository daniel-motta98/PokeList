import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ImagePokemon = styled(Image)`
  height: 200px;
  width: 200px;
`;

export const BoxImagePokemon = styled.View`
  align-items: center;
`;

export const NamePokemon = styled.Text`
  text-align: center;
  font-size: 50px;
  color: #cecece;
`;

export const BoxWeightAndHeightPokemon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
export const WeightPokemon = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #7f7f7f;

  flex: 1;
  text-align: center;
`;
export const LabelWeightPokemon = styled.Text`
  font-size: 25px;
  color: #151515;

  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const HeightPokemon = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #7f7f7f;

  flex: 1;
  text-align: center;
`;

export const BoxLabelWeightAndHeight = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelHeightPokemon = styled.Text`
  font-size: 25px;
  color: #151515;

  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const BoxBaseExperiencePokemon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ValueBaseExperiencePokemon = styled.Text`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: #7f7f7f;

  flex: 1;
  padding-top: 15px;
`;

export const BoxLabelBaseExperiencePokemon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelBaseExperiencePokemon = styled.Text`
  font-size: 25px;
  color: #151515;

  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const BoxAbilityPokemon = styled.View`
  flex: 1;
`;
export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #7f7f7f;
  text-align: center;
`;

export const LabelAbilityPokemon = styled.Text`
  font-size: 25px;
  color: #151515;

  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const LabelInfo = styled.Text`
  color: #5b5b5b;
  text-align: justify;
  align-items: center;

  margin: 30px;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
