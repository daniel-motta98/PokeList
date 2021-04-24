import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eaeaea;
  padding: 10px;
`;

export const BoxInfoPokemon = styled.View`
  background: #fff;
  margin-top: -35px;
  border-radius: 15px;
  elevation: 1;
`;

export const ImagePokemon = styled(Image)`
  height: 200px;
  width: 200px;
  z-index: 1;
`;

export const BoxImagePokemon = styled.View`
  z-index: 1;
  align-items: center;
  elevation: 1;
`;

export const NamePokemon = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #222;
  margin-top: 30px;
`;

export const BoxWeightAndHeightPokemon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
export const WeightPokemon = styled.Text`
  font-size: 20px;
  color: #7f7f7f;

  flex: 1;
  text-align: center;
`;
export const LabelWeightPokemon = styled.Text`
  font-size: 20px;
  color: #21b235;

  flex: 1;
  text-align: center;
`;

export const HeightPokemon = styled.Text`
  font-size: 20px;
  color: #7f7f7f;

  flex: 1;
  text-align: center;
`;

export const BoxLabelWeightAndHeight = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelHeightPokemon = styled.Text`
  font-size: 20px;
  color: #21b235;

  flex: 1;
  text-align: center;
`;

export const BoxBaseExperiencePokemon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ValueBaseExperiencePokemon = styled.Text`
  font-size: 20px;
  color: #7f7f7f;

  flex: 1;
  text-align: center;
`;

export const BoxLabelBaseExperiencePokemon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelBaseExperiencePokemon = styled.Text`
  font-size: 20px;
  color: #21b235;

  flex: 1;
  text-align: center;
`;

export const BoxAbilityPokemon = styled.View`
  flex: 1;
`;
export const Text = styled.Text`
  font-size: 15px;
  color: #7f7f7f;
  text-align: center;
`;

export const LabelAbilityPokemon = styled.Text`
  font-size: 20px;
  color: #21b235;

  flex: 1;
  text-align: center;
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
