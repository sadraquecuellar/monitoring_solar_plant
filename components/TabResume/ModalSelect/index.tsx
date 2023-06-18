import React from 'react';
import { Modal, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as S from './styles';

interface ModalSelectProps {
  onClose: () => void;
  visible: boolean;
  setOption: (option: {label:string, value:string}) => void;
}

export default function ModalSelect({onClose, visible, setOption}: ModalSelectProps){

  const options = [
    {label: 'Horas', value: 'hourly'},
    {label: 'Diário', value: 'daily'},
    {label: 'Mensal', value: 'monthly'},
    {label: 'Anual', value: 'yearly'},
  ]

  return (
    <Modal
        supportedOrientations={['portrait']}
        onRequestClose={() => {
          onClose()
        }}
        animationType="slide"
        transparent={true}
        visible={visible}
        >
          <View style={{flex: 1}}>
            <S.Container>
              <S.Content>
                <S.Header>
                  <S.Button activeOpacity={0.7} onPress={() => onClose()}>
                    <AntDesign name="close" size={25} color="white" />
                  </S.Button>
                </S.Header>
                {options.map((op: {label:string, value:string}, idx: number)=>(
                  <S.Item key={idx} onPress={() => setOption(op)}>
                    <S.TextItem>
                      {op.label}
                    </S.TextItem>
                  </S.Item>
                ))}
                
              </S.Content>
            </S.Container>
          </View>
      </Modal>
  )
}
