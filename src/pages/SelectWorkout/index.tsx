import { ViewStyle, Button, View } from 'react-native'
import React from 'react'

interface SelectWorkoutProps {
  navigation: any;
}

const SelectWorkout: React.FC<SelectWorkoutProps> = ( { navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="A" onPress={() => navigation.navigate('')}/>
      <Button title="B" onPress={() => navigation.navigate('')}/>
      <Button title="C" onPress={() => navigation.navigate('')}/>
    </View>
  )
}

export default SelectWorkout

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle }