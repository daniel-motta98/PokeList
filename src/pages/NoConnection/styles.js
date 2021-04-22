import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageCustomNoConnection = styled(Image)`
  height: 320px;
  width: 320px;
`;

export const LabelNoConnection = styled.Text`
  color: #7d7d7d;
  font-size: 16px;
  text-align: center;
  margin: 10px;
`;
