import styled from "styled-components/native";

export const HomePageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 32px;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 12px 24px;
  background-color: #007aff;
  border-radius: 4px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
