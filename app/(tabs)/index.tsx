import { useEffect, useState } from 'react';
import { View, Platform } from 'react-native';
import { useQuery } from 'react-query';
import Lottie from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';
import ProgressStatus from '../../components/ProgressStatusSummary';

import * as S from '../../styles/tabs/index/styles'
import DetailsSummary from '../../components/DetailsSummary';

export default function HomeScreen() {
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
      <ProgressStatus percentageGenerated={percentageGenerated}/>
      <DetailsSummary/>
    </S.Container>
  );
}