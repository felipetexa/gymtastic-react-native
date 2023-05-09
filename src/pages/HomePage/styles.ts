import styled from "styled-components/native";

export const HomePageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 50px;
`;

export const WelcomeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: grey;
  text-align: center;
  line-height: 25px;
  margin-bottom: 32px;
`;

export const LoginButton = styled.TouchableOpacity`
margin-top: 20px;
  padding: 20px 50px;
  background-color: #EC6633;
  border-radius: 50px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
