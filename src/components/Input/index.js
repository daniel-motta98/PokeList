import React from 'react';

import * as S from './styles';

const Input = ({...rest}) => {
  return (
    <S.Container>
      <S.SearchInput {...rest} />
    </S.Container>
  );
};

export default Input;
