import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #333;
  width:100%;
  border-radius:10px;
  padding:15px;
  align-items: center;
  padding-bottom:30px;
  margin-bottom:10px;
`;
export const Header = styled.View`
  width:100%;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin-bottom:20px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:#fff;
  text-align:center;
`;
export const Filter = styled.TouchableOpacity`
  width:90px;
  height: 35px;
  padding:5px 10px;
  background: #666;
  border-radius:5px ;
  flex-direction: row;
  align-items:center;
  justify-content:center;
`;
export const TextFilter = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color:#fff;
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