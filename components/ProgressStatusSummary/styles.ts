import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50%;
  align-items:center;
  justify-content:center;
  position: relative;
`;
export const TextProgress = styled.Text`
  font-weight:bold;
  font-size:65px;
  color:#fff;
`;
export const TextProgressSmall = styled.Text`
  font-size:35px;
  color:#fff;
`;
export const StatusDetails = styled.View`
  width: 100%;
  height:30px;
  padding: 0px 5px;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;
  position: absolute;
  bottom: 10px;
  left: 0px;
`;
export const Row = styled.View`
  /* width: 100%; */
  flex-direction: row;
  align-items:center;
  margin-bottom:5px;
`;
interface LegendColorProps {
  color: string;
}
export const LegendColor = styled.View<LegendColorProps>`
  width: 25px;
  height:10px;
  border-radius:5px;
  background-color: ${(props) => props?.color};
  margin-right:5px;
`;
export const TextDetails = styled.Text`
  font-size:14px;
  color:#fff;
`;