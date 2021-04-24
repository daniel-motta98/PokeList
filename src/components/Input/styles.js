import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const widthScreen = Dimensions.get('screen').width;

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const BoxInconSearchAndTextInput = styled.View`
  flex-direction: row;
`;

export const CustomIcon = styled(Icon)`
  margin-top: 10px;
  position: absolute;
  z-index: 999;
  padding-left: 2px;
`;

export const SearchInput = styled.TextInput`
  background: #dbdbdb;
  width: ${widthScreen * 0.9}px;
  border-radius: 10px;
  height: 55px;
  padding: 10px;
  color: #222;
  padding-left: 40px;
`;
