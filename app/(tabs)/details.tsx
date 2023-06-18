import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useQuery, useQueryClient  } from 'react-query';

import TabResume from '../../components/TabResume';
import CardDetails from '../../components/CardDetails';
import api from '../../services/api';

import * as S from '../../styles/tabs/details/styles'
import ChartDetails from '../../components/ChartDetails';

export default function Details() {
  const queryClient = useQueryClient ();
  
  const [option, setOption] = useState({label: 'Horas', value: 'hourly'});
  const [percentage, setPercentage] = useState(0);
  const [energyGenerated, setEnergyGenerated] = useState(0);
  const [treesSaved, setTreesSaved] = useState(0);
  const [co2Not, setCo2Not] = useState(0);
  const [dataChart, setDataChart] = useState<Array<{x: string, y: number}>>([]);
  const [labelX, setLabelX] = useState('Hora')

  const getStats = async () =>{
    return await api.get(
      `/plant/generation/test-2023?dataType=yearly`,
    );
  }

  const { data: statsSolar, isLoading } = useQuery(
    'stats-solar',
    getStats,
    {
      retry: 3,
    }
  )

  async function refetchData() {
    await queryClient.invalidateQueries('stats-solar')
    console.log('cancel')
  }

  useEffect(()=>{
    console.log(option?.value)
    refetchData()
  },[option])


  const generatedDataChart = (array1: Array<string>, array2: Array<number>) => {
    const mergedList = [];
    for (let i = 0; i < array1.length; i++) {
      const item1 = array1[i];
      const item2 = array2[i];
      const mergedItem = { x: item1, y: item2 };
      mergedList.push(mergedItem);
    }
    return mergedList;
  }

  const labelDataChart = (arrayLabel: Array<string>) =>{
    const formatDaily = () => {
      const list = []
      for (let i = 0; i < arrayLabel.length; i++){
        list.push(arrayLabel[i].split('-')[2])
      }
      return list
    }
    const formatMonthly = () => {
      const list = []
      for (let i = 0; i < arrayLabel.length; i++){
        list.push(`${arrayLabel[i].split('-')[1]}/${arrayLabel[i].split('-')[0].substring(2,4)}`)
      }
      return list
    }
    const formatYearly = () => {
      const list = []
      for (let i = 0; i < arrayLabel.length; i++){
        list.push(`${arrayLabel[i].split('-')[0].substring(2,4)}`)
      }
      return list
    }

    const x = 1

    switch (x){
      case 1:
        setLabelX('Ano')
        return formatYearly()
      case 'daily':
        setLabelX('Dias')
        return formatDaily()
      case 'monthly':
        setLabelX('Mês')
        return formatMonthly()
      default:
        return []
    }
  }

  useEffect(()=>{
    if(!isLoading){
      console.log(statsSolar?.data?.data?.x_labels)
      const {kwh, percentage, trees, co2} = statsSolar?.data?.data?.totals
      const labels = statsSolar?.data?.data?.x_labels || undefined
      const generation = statsSolar?.data?.data?.generation || undefined
      setDataChart(generatedDataChart(labelDataChart(labels), generation))
      setPercentage(percentage.toFixed(0))
      setEnergyGenerated(kwh.toFixed(1))
      setTreesSaved(trees)
      setCo2Not(co2)
    }
  },[isLoading])

  const details = [
    { id: 1, type:"energy-generated", title:'Energia gerada', value: `${energyGenerated}`, unity: 'kWh'},
    { id: 2, type:"panel", title:'Painéis ativos', value:'3', unity: 'un.'},
    { id: 3, type:"co2", title:'CO² evitado', value: `${co2Not}`, unity: 'ton.' },
    { id: 4, type:"tree", title:'Árvore salvas', value: `${treesSaved}` , unity: 'un.'},
  ]

  return (
    <S.ScrollPage>
      <S.Container>
        <TabResume 
          option={option}
          setOption={setOption} 
          percentage={percentage}
        />
        <FlatList
          data={details}
          renderItem={({item}) => <CardDetails type={item?.type} title={item?.title} value={item?.value} unity={item?.unity}/>}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />

        <ChartDetails chartData={dataChart} labelX={labelX}/>
      </S.Container>
    </S.ScrollPage>
  );
}
