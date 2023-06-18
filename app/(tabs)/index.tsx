import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import ProgressStatus from '../../components/ProgressStatusSummary';
import DetailsSummary from '../../components/DetailsSummary';

import { useStatsSolar } from '../../context/StatsSolarContext';

import * as S from '../../styles/tabs/index/styles'

export default function HomeScreen() {
  const [totalGenerated, setTotalGenerated] = useState(0)
  const [totalExpected, setTotalExpected] = useState(0)
  const [percentageGenerated, setPercentageGenerated] = useState(-1)
  const [generating, setGenerating] = useState(true)
  const [treesSaved, setTreesSaved] = useState(0);
  const [co2Not, setCo2Not] = useState(0);
  const [today, setToday] = useState('');
  const { hourlyData } = useStatsSolar();

  useEffect(() => {
    if(hourlyData){
      const {expected, generation, totals} = hourlyData

      function somarItensArray(array:Array<number>) {
        let soma = 0;
        for (let i = 0; i < array.length; i++) {
          soma += array[i];
        }
        return soma;
      }
      const dateToday = new Date();
      setToday(`${dateToday.getDate()}/${dateToday.getMonth()+1 < 10 ? `0${dateToday.getMonth()+1}` : dateToday.getMonth()+1}/${dateToday.getFullYear()}`)
      setTotalExpected(expected[expected.length-1]);
      setTotalGenerated(somarItensArray(generation));
      setPercentageGenerated(Number(totals?.percentage.toFixed(0)));
      setTreesSaved(totals?.trees);
      setCo2Not(totals?.co2);
    }
  },[hourlyData])

  return (
    <S.Container>
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
      <DetailsSummary 
        totalGenerated={totalGenerated} 
        totalExpected={totalExpected}
        treesSaved={treesSaved}
        co2Not={co2Not}
        today={today}
      />
    </S.Container>
  );
}