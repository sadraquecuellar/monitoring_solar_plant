import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  background-color: rgba(0, 0, 0, 0.7);
  align-items:center;
  justify-content:flex-end;
`;
export const Content = styled.View`
  width:100%;
  height:300px;
  background-color: #1a1a1a;
  flex-direction: column;
  align-items: center;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  z-index:5;
`;
export const Header = styled.View`
  width:100%;
  align-items: flex-end;
`;
export const Button = styled.TouchableOpacity`  
  padding:15px;
`;
export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 18%;
  padding:10px;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #333;
`;
export const TextItem = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
