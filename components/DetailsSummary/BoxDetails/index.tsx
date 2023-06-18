import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

interface BoxDetailsProps {
  up: boolean;
  value: string; 
  unity: string;
  description: string;
}


export default function BoxDetails({up, value, unity, description}:BoxDetailsProps) {

  return (
    <S.Container>
      <S.BoxDetailsLeft>
        <S.Row>
          <S.TextNumberPrimary>
            {value}
          </S.TextNumberPrimary>
          <S.TextNumberSecondary>
            {' '} {unity}
          </S.TextNumberSecondary>
        </S.Row>
        <S.TextDetailsSmall>
          {description}
        </S.TextDetailsSmall>
      </S.BoxDetailsLeft>
      <S.BoxDetailsRight>
        {up ? 
          <AntDesign name="arrowup" size={24} color="green" />
          :
          <AntDesign name="arrowdown" size={24} color="red" />
        }
      </S.BoxDetailsRight>
    </S.Container>
  )
}
