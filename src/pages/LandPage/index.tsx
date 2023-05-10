import React from 'react'
import { Text, View, ViewStyle, Button } from 'react-native';

interface LandPageProps {
  navigation: any;
  route: any;
}

const LandPage: React.FC<LandPageProps> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
    <Text>Hello, {route.params.name}!</Text>
    <Text>What do you want to do today?</Text>
    <Button title="Start working out" onPress={() => navigation.navigate('SelectWorkout')}/>
    <Button title="Manage your workouts" />
    </View>
  )
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle }

export default LandPage