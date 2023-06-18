import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis  } from 'victory-native';

import * as S from './styles';

interface ChartProps {
  chartData: Array<{x: string, y: number}>
  labelX: string
}
const Chart = ({chartData, labelX}:ChartProps)=>{
  const layout = useWindowDimensions();
  return (
    <VictoryChart
      domainPadding={10}
      height={300}
      width={ chartData.length > 8 ? 40 * chartData.length : layout.width-30}
      style={{
        parent:{marginRight:-20}
      }}
    >
      <VictoryBar
        style={{ 
          data: { fill: "#F6C945"}, 
          labels: { fill: "#fff", fontSize:12},          
        }}
        barWidth={20}
        labels={({ datum }) => {
          if (datum.y < 1000) return datum.y
          const label = datum.y.toString();
          return label.length >= 3 ?  `${label.substring(0,1)}K`: label
        }}
        data={chartData}
      />
      <VictoryAxis
        label={labelX}
        style={{
          axisLabel: { padding: 30, fill: "#fff" },
          tickLabels: {fill: "#fff"}
        }}
      />
      <VictoryAxis 
        dependentAxis
        label="kWh gerado"
        tickFormat={(t) => {
          const tickString = t.toString();
          return tickString.length >= 3 ?  `${tickString.substring(0,1)}K`: tickString
        }}  
        style={{
          axisLabel: { padding: 35, fill: "#fff"},
          tickLabels: {fill: "#fff"}
        }}
      />
    </VictoryChart>
  )
}

export default function ChartDetails({chartData, labelX} : ChartProps){
  return (
    <S.Container>
      <S.Title>Gráfico de detalhamento</S.Title>
      {chartData.length > 8 ?
        <ScrollView horizontal>
          <Chart chartData={chartData} labelX={labelX}/>
        </ScrollView>
        :
        <Chart chartData={chartData} labelX={labelX}/>
      }
    </S.Container>
  )
}
