import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import ModalSelect from './ModalSelect';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface TabResumeProps {
  option: {label: string, value: string},
  setOption: (option: {label:string, value:string}) => void;
  percentage: number;
}


export default function TabResume({option, setOption, percentage}: TabResumeProps){
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  const handleOption = (op: {label: string, value: string}) =>{
    setIsPanelActive(false)
    setOption(op)
  }

  const handleCompleted = () =>{
    if(option.value === 'null') setOption({label: 'Horas', value: 'hourly'})
    setCompleted(true)
  }

  useEffect(()=>{
    setCompleted(false)
  },[option])


  return (
    <S.Container>
      <S.Header>
        <S.Title>Estatísticas</S.Title>
        <S.Filter activeOpacity={0.7} onPress={() => setIsPanelActive(true)}>
          <S.TextFilter>{option.label}</S.TextFilter>
          <AntDesign name="caretdown" size={12} color="white" style={{marginLeft:5}} />
        </S.Filter>
      </S.Header>
      <AnimatedCircularProgress
        size={250}
        width={30}
        fill={Number(percentage)}
        tintColor="#F6C945"
        backgroundColor="#b3b3b3"
        style={{
          marginBottom:-20,
        }}
        onAnimationComplete={() => handleCompleted() }
      >
      {
        (fill) => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {completed && (
              <>
                <S.TextProgress>{fill}</S.TextProgress>
                <S.TextProgressSmall>%</S.TextProgressSmall>
              </>
            )}
          </View>
        )
      }
      </AnimatedCircularProgress>
      <View style={{width:'100%', height:40}}/>
      <S.Title>A sua usina atingiu {percentage}% da expectativa de geração de energia</S.Title>
      <ModalSelect visible={isPanelActive} onClose={() => setIsPanelActive(false)} setOption={handleOption}/>
    </S.Container>
  );
}
