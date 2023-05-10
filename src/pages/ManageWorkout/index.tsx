import { ViewStyle, Button, View } from 'react-native'
import React from 'react'

interface ManageWorkoutProps {
  navigation: any;
}

const ManageWorkout: React.FC<ManageWorkoutProps> = ( { navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="A" onPress={() => navigation.navigate('ExerciseList')}/>
      <Button title="B" onPress={() => navigation.navigate('')}/>
      <Button title="C" onPress={() => navigation.navigate('')}/>
    </View>
  )
}

export default ManageWorkout

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle }