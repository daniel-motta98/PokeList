import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FlatListCustom = styled(FlatList)`
  margin-top: 200px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background: #545454;
`;

export const Text = styled.Text`
  color: #ccc;
  font-size: 18px;
`;

export const BoxFlatList = styled.View`
  padding: 20px;
`;

export const ButtonInfoPokemon = styled.TouchableOpacity``;

export const LoadingIndicator = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
