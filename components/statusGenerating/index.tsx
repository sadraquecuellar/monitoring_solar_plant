import React from 'react';
import Lottie from 'lottie-react-native';

import * as S from '../../styles/tabs/index/style'

interface StatusProps {
  generating: boolean;
}

export default function Status({generating}:StatusProps) {
  return (
    <S.BoxStatus active={generating}>
      {generating ? 
        <Lottie source={require('../../assets/lotties/sun.json')} autoPlay loop />
      :
        <Lottie source={require('../../assets/lotties/cloudy2.json')} autoPlay loop />
      }
    </S.BoxStatus>
  );
}
