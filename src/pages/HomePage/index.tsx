import React from "react";
import { View } from "react-native";
import { HomePageContainer, WelcomeText, InfoText, LoginButton, LoginButtonText } from "./styles";

interface HomePageProps {
  navigation: any;
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <HomePageContainer>
      <WelcomeText>Welcome to GymTastic!</WelcomeText>
      <InfoText>
        This app helps you keep track of your workouts and visualize your
        progress over time.
      </InfoText>
      <LoginButton onPress={() => navigation.navigate('Login')}>
        <LoginButtonText>Log in to get started</LoginButtonText>
      </LoginButton>
    </HomePageContainer>
  );
};

export default HomePage;
