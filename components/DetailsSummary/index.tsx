import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

interface BoxDetailsProps {
  up: boolean;
  value: number; 
  unity: string;
  description: string;
}

const BoxDetails = (props:BoxDetailsProps) =>{
  const {up, value, unity, description} = props

  return (
    <S.BoxDetails>
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
    </S.BoxDetails>
  )
}

export default function DetailsSummary(){
  return (
    <S.Container>
        <S.SelectDay>
          <S.SelectDayButton>
            <AntDesign name="left" size={20} color="white" />
          </S.SelectDayButton>
          <S.SelectDayContent>
            <S.SelectDayContentText>
              Hoje, 16/06/23
            </S.SelectDayContentText>
          </S.SelectDayContent>
          <S.SelectDayButton>
            <AntDesign name="right" size={20} color="white" />
          </S.SelectDayButton>
        </S.SelectDay>
        <S.Details>
          <S.DetailsLeftSide>
            <BoxDetails up={true} value={135} unity={'kWh'} description={'Energia gerada'} />
          </S.DetailsLeftSide>
          <S.DetailsRightSide>
            <BoxDetails up={false} value={200} unity={'kWh'} description={'Energia esperada'} />
          </S.DetailsRightSide>
        </S.Details>
        <S.Details>
          <S.DetailsLeftSide>
            <BoxDetails up={false} value={200} unity={'ton'} description={'Redução de CO2'} />
          </S.DetailsLeftSide>
          <S.DetailsRightSide>
            <BoxDetails up={true} value={1.1} unity={''} description={'Árvores salvas'} />
          </S.DetailsRightSide>
        </S.Details>
      </S.Container>
  )
}
