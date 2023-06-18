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

  const getStats = async () =>{
    return await api.get(
      `/plant/generation/test-2023?dataType=${option?.value}`,
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

  useEffect(()=>{
    if(!isLoading){
      console.log(statsSolar?.data?.data?.totals)
      const {kwh, percentage, trees, co2} = statsSolar?.data?.data?.totals
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

        <ChartDetails/>
      </S.Container>
    </S.ScrollPage>
  );
}
