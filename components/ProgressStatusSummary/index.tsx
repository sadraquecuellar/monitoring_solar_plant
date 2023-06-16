import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import * as S from './styles';

export default function ProgressStatus(props: any){

  const {percentageGenerated} = props

  return (
    <S.Container>
      <AnimatedCircularProgress
        size={260}
        width={30}
        fill={percentageGenerated}
        tintColor="#F6C945"
        backgroundColor="#b3b3b3"
        style={{marginTop:-20}}
      >
      {
        (fill) => (
          <S.TextProgress>{fill}%</S.TextProgress>
        )
      }
      </AnimatedCircularProgress>
      <S.StatusDetails>
        <S.Row>
          <S.LegendColor color={'#F6C945'}/>
          <S.TextDetails>
            Energia gerada
          </S.TextDetails>
        </S.Row>
        <S.Row>
          <S.LegendColor color={'#b3b3b3'}/>
          <S.TextDetails>
            Energia esperada 
          </S.TextDetails>
        </S.Row>
      </S.StatusDetails>
    </S.Container>
  )
}

