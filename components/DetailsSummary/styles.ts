import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height:50%;
  padding: 20px;
  align-items:center;
  justify-content:flex-start;
  background-color: #3c017f;
  border-top-left-radius:25px;
  border-top-right-radius:25px;
`;
export const SelectDay = styled.View`
  width: 97%;
  height:50px;
  border-radius: 15px;
  background-color: #fff;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  background:#24014c;
`;
export const SelectDayButton = styled.TouchableOpacity`
  width: 10%;
  align-items:center;
  justify-content:center;
`;
export const SelectDayContent = styled.View`
  width: 80%;
  align-items:center;
  justify-content:center;
`;
export const SelectDayContentText = styled.Text`
  font-size: 16px;
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

export const Details = styled.View`
  width: 100%;
  padding:10px;
  margin-top:15px;
  flex-direction: row;
`;
export const DetailsLeftSide = styled.View`
  width: 50%;
  align-items:center;
  justify-content:center;
`;
export const DetailsRightSide = styled.View`
  width: 50%;
  align-items:center;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items:center;
  margin-bottom:5px;
`;