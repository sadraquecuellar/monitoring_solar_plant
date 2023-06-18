import React from 'react';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import * as S from './styles';

export default function ProgressStatus(props: any){

  const {percentageGenerated} = props

  return (
    <S.Container>
      <AnimatedCircularProgress
        size={300}
        width={20}
        arcSweepAngle={220}
        rotation={250}
        fill={Number(percentageGenerated)}
        tintColor="#F6C945"
        backgroundColor="#b3b3b3"
        style={{
          marginBottom:-20,
        }}
      >
      {
        (fill) => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <S.TextProgress>{fill}</S.TextProgress>
            <S.TextProgressSmall>%</S.TextProgressSmall>
          </View>
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

