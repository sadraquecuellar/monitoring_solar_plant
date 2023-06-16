import { useEffect, useState } from 'react';
import { View, Platform } from 'react-native';
import { useQuery } from 'react-query';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Lottie from 'lottie-react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import * as S from '../../styles/tabs/index/styles'
import api from '../../services/api';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const router = useRouter();

  const [totalGenerated, setTotalGenerated] = useState(0)
  const [totalExpected, setTotalExpected] = useState(0)
  const [percentageGenerated, setPercentageGenerated] = useState(0)
  const [generating, setGenerating] = useState(true)


  const { data: statsSolar, isLoading } = useQuery(
    'daily-stats',
    async () => {
      return await api.get(
        `/plant/generation/test-2023?dataType=daily`,
      );
    }
  )


  useEffect(() => {
    if(!isLoading){
      const expected = statsSolar?.data.data.expected
      const generated = statsSolar?.data.data.generation

      function percentageCalc(valor: number, total: number) {
        return (valor / total) * 100;
      }

      setTotalExpected(expected[expected.length-1]);
      setTotalGenerated(generated[generated.length-1])
      // setPercentageGenerated(percentageCalc(generated[generated.length-1], expected[expected.length-1]))
      setPercentageGenerated(90)
    }
  },[isLoading])

  return (
    <S.Container>
      <S.TextPrimary>Resumo</S.TextPrimary>
      <S.HeaderSummary>
          <View style={{width: '10%', height: '100%'}}>
            {generating ? 
              <Lottie source={require('../../assets/lotties/circle-green.json')} autoPlay loop />
            :  
              <Lottie source={require('../../assets/lotties/circle-green.json')} autoPlay loop />
            }
          </View>
        </S.HeaderSummary>
      <S.BoxChart>
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
      </S.BoxChart>
      <S.Resume>
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
      </S.Resume>
    </S.Container>
  );
}