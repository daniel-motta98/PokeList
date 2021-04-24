import {FlatList, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eaeaea;
`;

export const FlatListCustom = styled(FlatList)`
  margin-top: 20px;
`;

export const BoxButtonLoadMore = styled.View`
  align-items: center;
  margin: 10px;
`;

export const ButtonReadMore = styled.TouchableOpacity`
  border: 2px solid #aaaa;
  width: 130px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const LabelButtonReadMore = styled.Text`
  color: #aaaa;
  font-weight: bold;
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
  padding: 5px;
  flex: 1;
`;

export const ButtonInfoPokemon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 150px;
  border-radius: 10px;
  elevation: 10;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
