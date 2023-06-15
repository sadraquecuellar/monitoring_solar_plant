import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import * as S from '../../styles/tabs/index/style'
import api from '../../services/api';
import Status from '../../components/statusGenerating';

export default function HomeScreen() {

  const [totalGenerated, setTotalGenerated] = useState(0)
  const [totalExpected, setTotalExpected] = useState(0)
  const [percentageGenerated, setPercentageGenerated] = useState(0)
  const [generating, setGenerating] = useState(true)

  const [dataChart, setDataChart] = useState([])


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
      const {kwh, percentage} = statsSolar?.data.data.totals

      // const soma = expected.reduce(function(soma: number, i: number) {
      //   return soma + i;
      // });
      // setPercentageGenerated([
      //   { label: "Total gerado", x: "generation", y: 81.59 },
      //   { label: "Total esperado", x: "expected", y: 18.41 },
      // ])

      setTotalExpected(expected[expected.length-1]);
      setTotalGenerated(generated[generated.length-1])
      setPercentageGenerated(Math.round(percentage))
    }
  },[isLoading])

  return (
    <S.Container>
      <S.BoxChart>
        <AnimatedCircularProgress
          size={260}
          width={30}
          fill={percentageGenerated}
          tintColor="#2f95dc"
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
            <S.LegendColor color={'#2f95dc'}/>
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
        <S.TextPrimary>Resumo diário</S.TextPrimary>
        <S.Details>
          <S.Row>
            <S.TextTertiary>
              Total gerado: 
            </S.TextTertiary>
            <S.TextSecondary>
              {' '}{totalGenerated} kWh
            </S.TextSecondary>
          </S.Row>
          <S.Row>
            <S.TextTertiary>
              Total esperado: 
            </S.TextTertiary>
            <S.TextSecondary>
              {' '}{totalExpected.toFixed(1)} kWh
            </S.TextSecondary> 
          </S.Row>
        </S.Details>
      </S.Resume>
    </S.Container>
  );
}