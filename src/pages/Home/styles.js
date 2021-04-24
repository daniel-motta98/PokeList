import {FlatList, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FlatListCustom = styled(FlatList)``;

export const BoxButtonLoadMore = styled.View`
  align-items: center;
  margin: 10px;
`;

export const ButtonReadMore = styled.TouchableOpacity`
  border: 1px solid #ccc;
  width: 130px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const LabelButtonReadMore = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background: #545454;
`;

export const ImagePokemon = styled(Image)`
  width: 70px;
  height: 70px;
`;

export const Text = styled.Text`
  color: #ccc;
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
`;

export const BoxFlatList = styled.View`
  padding: 15px;
`;

export const ButtonInfoPokemon = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
