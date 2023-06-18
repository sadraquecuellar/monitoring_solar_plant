import React from 'react';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import * as S from './styles';

type IconCardProps = {
  type: string
}

const IconCard = ({type}: IconCardProps) => {
  switch (type) {
    case 'tree':
      return (<Foundation testID="iconCardDetails" name="trees" size={30} color="green" />)
    case 'co2':
      return (<MaterialCommunityIcons testID="iconCardDetails" name="molecule-co2" size={30} color="white" />)
    case 'energy-generated':
      return <SimpleLineIcons testID="iconCardDetails" name="energy" size={30} color="yellow" />
    case 'panel':
      return <FontAwesome5 testID="iconCardDetails" name="solar-panel" size={30} color="white" />
    default:
      return <></>
  }
}

interface CardDetailsProps {
  type: string,
  title: string,
  value: string,
  unity: string,
  direction: string,
}

export default function CardDetails({type, title, value, unity, direction}:CardDetailsProps){
  return (
    <S.Container style={{ alignItems: direction === 'left' ? 'flex-start' : 'flex-end' }}>
      <S.Content>
        <IconCard type={type || 'energy-generated'}/>
        {value.length <= 3 && <S.TextPrimary>{value}</S.TextPrimary>}
        {value.length > 3 && value.length <= 6 && <S.TextPrimaryMedium>{value}</S.TextPrimaryMedium>}
        {value.length > 6 && <S.TextPrimarySmall>{value}</S.TextPrimarySmall>}
        <S.TextUnity>
          {unity}
        </S.TextUnity>
        <S.TextSecondary>
          {title}
        </S.TextSecondary>
      </S.Content>
    </S.Container>
  )
}
