import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const widthScreen = Dimensions.get('screen').width;

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const SearchInput = styled.TextInput`
  background: #222;
  width: ${widthScreen * 0.9}px;
  border-radius: 10px;
  height: 55px;
  padding: 10px;
`;
