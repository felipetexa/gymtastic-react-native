import React from "react";
import { Image, View } from "react-native";
import { HomePageContainer, WelcomeText, InfoText, LoginButton, LoginButtonText } from "./styles";

interface HomePageProps {
  navigation: any;
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <HomePageContainer>
      <Image source={require('./../../../assets/GymTasticSmallLogo.png')} style={{width: 150, height: 150}}/>
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
