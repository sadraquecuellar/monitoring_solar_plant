import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding:20px 0px 0px  0px;
  background-color:#eee;
`;
export const BoxStatus = styled.View`
  background-color: ${(props) => props.active ? 'rgba(0, 204, 153, 0.4)' : 'rgba(255, 85, 77, 0.4)' }  ;
  border-radius:5px;
  width: 60px;
  height:30px;
  align-items:center;
  justify-content:center;
  margin-right:10px;
`;
export const TextStatus = styled.Text`
  font-size:16px;
  color:#fff;
`;
export const TextProgress = styled.Text`
  font-weight:bold;
  font-size:50px;
`;
export const TextPrimary = styled.Text`
  font-weight:bold;
  font-size:20px;
`;
export const TextSecondary = styled.Text`
  font-size:18px;
  font-weight:bold;
`;
export const TextTertiary = styled.Text`
  font-size:18px;
`;
export const TextDetails = styled.Text`
  font-size:14px;
`;
export const BoxChart = styled.View`
  width: 100%;
  height:60%;
  align-items:center;
  justify-content:center;
  position: relative;
`;
export const Resume = styled.View`
  width: 100%;
  height:40%;
  padding:15px;
  align-items:center;
  justify-content:flex-start;
  background-color: #fff;
  border-top-left-radius:25px;
  border-top-right-radius:25px;
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
  justify-content:center;
  margin-bottom:5px;
`;
export const LegendColor = styled.View`
  width: 25px;
  height:10px;
  border-radius:5px;
  background-color: ${(props) => props.color};
  margin-right:5px;
`;
export const Details = styled.View`
  width: 80%;
  padding:10px;
  margin-top:15px;
  align-items:center;
  border-width: 1px;
  border-color: #999;
  border-radius:10px;
`;