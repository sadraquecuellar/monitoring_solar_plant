import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const ScrollPage = styled.ScrollView`
  width:100%;
  background-color: #1a1a1a;
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1a1a1a;
  padding: 10px;
`;
export const LineCards = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const BoxChart = styled.View`
  width: 100%;
  height: 10px;
  flex: 1;
  padding:5px 20px;
  background-color: #333;
`;
export const TabBar = styled.View`
  padding-top:10px;
  flex-direction: row;
  background-color: #1a1a1a;
`;
interface TabItemProps {
  selected: boolean;
}
export const TabItem = styled.TouchableOpacity<TabItemProps>`
  flex: 1;
  align-items: center;
  padding: 14px;
  background-color: ${(props) => props?.selected ? '#333' : '#000'};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
export const TextPrimary = styled.Text`
  font-weight:bold;
  font-size:20px;
  color:#fff;
`;
export const TabItemText = styled(Animated.Text)`
  font-weight:bold;
  font-size:20px;
  color:#fff;
`;
