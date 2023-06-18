import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import BoxDetails from './BoxDetails';
interface DetailsSummaryProps {
  totalGenerated: number
  totalExpected: number
  treesSaved: number
  co2Not: number,
  today: string
}

export default function DetailsSummary({totalGenerated, totalExpected, treesSaved, co2Not, today}:DetailsSummaryProps){
  return (
    <S.Container>
        <S.SelectDay>
          <S.SelectDayButton>
            <AntDesign name="left" size={20} color="white" />
          </S.SelectDayButton>
          <S.SelectDayContent>
            <S.SelectDayContentText>
              Hoje,{' '}{today}
            </S.SelectDayContentText>
          </S.SelectDayContent>
          <S.SelectDayButton>
            <AntDesign name="right" size={20} color="white" />
          </S.SelectDayButton>
        </S.SelectDay>
        <S.Details>
          <S.DetailsLeftSide>
            <BoxDetails up={true} value={totalGenerated.toFixed(1)} unity={'kWh'} description={'Energia gerada'} />
          </S.DetailsLeftSide>
          <S.DetailsRightSide>
            <BoxDetails up={false} value={totalExpected.toFixed(1)} unity={'kWh'} description={'Energia esperada'} />
          </S.DetailsRightSide>
        </S.Details>
        <S.Details>
          <S.DetailsLeftSide>
            <BoxDetails up={false} value={co2Not.toString()} unity={'ton'} description={'Redução de CO2'} />
          </S.DetailsLeftSide>
          <S.DetailsRightSide>
            <BoxDetails up={true} value={treesSaved.toString()} unity={''} description={'Árvores salvas'} />
          </S.DetailsRightSide>
        </S.Details>
      </S.Container>
  )
}
