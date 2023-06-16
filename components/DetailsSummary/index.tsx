import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';

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
            <S.BoxDetails>
              <S.BoxDetailsLeft>
                <S.Row>
                  <S.TextNumberPrimary>
                    {/* {totalGenerated} */}
                    135
                  </S.TextNumberPrimary>
                  <S.TextNumberSecondary>
                    {' '} kWh
                  </S.TextNumberSecondary>
                </S.Row>
                <S.TextDetailsSmall>
                  Energia gerada
                </S.TextDetailsSmall>
                <S.Row>
                  <S.TextNumberPrimary>
                    {/* {totalGenerated} */}
                    135
                  </S.TextNumberPrimary>
                  <S.TextNumberSecondary>
                    {' '} kWh
                  </S.TextNumberSecondary>
                </S.Row>
                <S.TextDetailsSmall>
                  Energia gerada
                </S.TextDetailsSmall>
              </S.BoxDetailsLeft>
              <S.BoxDetailsRight>
                <AntDesign name="left" size={24} color="green" />
              </S.BoxDetailsRight>
            </S.BoxDetails>
          </S.DetailsLeftSide>
          <S.DetailsRightSide>
            <S.Row>
              <S.TextNumberPrimary>
                {/* {totalGenerated} */}
                135
              </S.TextNumberPrimary>
              <S.TextNumberSecondary>
                {' '} kWh
              </S.TextNumberSecondary>
            </S.Row>
            <S.TextDetailsSmall>
              Energia gerada
            </S.TextDetailsSmall>
          </S.DetailsRightSide>
          {/* <S.Row>
            <S.TextTertiary>
              Energia gerada: 
            </S.TextTertiary>
            <S.TextSecondary>
              {' '}{totalGenerated} kWh
            </S.TextSecondary>
          </S.Row>
          <S.Row>
            <S.TextTertiary>
              Energia esperada: 
            </S.TextTertiary>
            <S.TextSecondary>
              {' '}{totalExpected.toFixed(1)} kWh
            </S.TextSecondary> 
          </S.Row> */}
        </S.Details>
      </S.Container>
  )
}
