import React from 'react';
import { useWindowDimensions } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis  } from 'victory-native';

import * as S from './styles';

const DATA = [
  { x: '01', y: 110.9 },
  { x: '02', y: 113.3 },
  { x: '03', y: 107.8 },
  { x: '04', y: 101.9 },
  { x: '05', y: 97.3 },
  { x: '06', y: 105.4 },
  { x: '07', y: 108.2 },
  { x: '08', y: 105.4 },
  { x: '09', y: 84.7 },
  { x: '10', y: 94.3 },
  { x: '11', y: 94.0 },
  { x: '12', y: 89.9 },
  { x: '13', y: 103.5 },
  { x: '14', y: 102.5 },
  { x: '15', y: 99.7 },
  { x: '16', y: 99.7 },
  { x: '17', y: 97.2 },
  { x: '18', y: 97.5 },
  { x: '19', y: 97.8 },
  { x: '20', y: 97.4 },
  { x: '21', y: 97.1 },
  { x: '22', y: 87.3 },
  { x: '23', y: 86.8 },
  { x: '24', y: 92.7 },
  { x: '25', y: 87.6 },
  { x: '26', y: 89.8 },
  { x: '27', y: 67.8 },
  { x: '28', y: 77.9 },
  { x: '29', y: 78.6 },
  { x: '30', y: 0 },
];


export default function ChartDetails(){
  const layout = useWindowDimensions();

  return (
    <S.Container>
      <VictoryChart
        domainPadding={10}
        height={500}
        width={layout.width-20}
        style={{
        parent:{
          width:'100%',
          marginLeft:-10,
          fill: "#fff",
          color: "#fff",
          paddingBottom: 10,
        },
        }}
      >
        <VictoryBar
          horizontal
          style={{ 
            data: { fill: "#F6C945", color:"#fff"}, 
            labels: { fill: "#fff", color:"#fff"},
            border:{
              padding: 50,
            }
          }}
          labels={({ datum }) => datum.y}
          data={DATA}
        />
        <VictoryAxis
          label="Dias"
          style={{
            axisLabel: { padding: 30, fill: "#fff" }
          }}
        />
        <VictoryAxis dependentAxis
          label="kWh gerado"
          style={{
            axisLabel: { padding: 30,fill: "#fff" },
          }}
        />
      </VictoryChart>
    </S.Container>
  )
}
