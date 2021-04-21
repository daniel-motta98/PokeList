import React from 'react';

import * as S from './styles';

const Input = ({...rest}) => {
  return (
    <S.Container>
      <S.BoxInconSearchAndTextInput>
        <S.CustomIcon name="search" size={30} color="#cecece" />
        <S.SearchInput {...rest} />
      </S.BoxInconSearchAndTextInput>
    </S.Container>
  );
};

export default Input;
