import React from 'react';

import * as S from './styles';

const NoConnection = () => {
  return (
    <S.Container>
      <S.ImageCustomNoConnection
        source={require('../../assets/no-connection.png')}
      />

      <S.LabelNoConnection>
        Eita, você está sem conexão com a internet. 😕 {'\n'} Por favor, feche o
        aplicativo e volte assim que sua conexão establilizar.
      </S.LabelNoConnection>
    </S.Container>
  );
};

export default NoConnection;
