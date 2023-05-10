import React, { useState } from 'react';
import { View, Text, FlatList, Button, ViewStyle } from 'react-native';
import { fetchExercisesByMuscle } from '../../services/ExerciseAPI';

interface Exercise {
  id: string;
  name: string;
}

const ExerciseList: React.FC = () => {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  const handleMuscleSelect = async (muscle: string) => {
    setSelectedMuscle(muscle);
    try {
      const data = await fetchExercisesByMuscle(muscle);
      setExercises(data);
    } catch (error) {
      console.log('There was an error fetching the exercise data');
    }
  };

  const handleExerciseSelect = (exercise: Exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
  };

  return (
    <View style={styles.container}>
      <Text>Select a muscle group:</Text>
      <Button title="Abdominals" onPress={() => handleMuscleSelect('abdominals')} />
      <Button title="Biceps" onPress={() => handleMuscleSelect('biceps')} />
      {/* Add buttons for other muscle groups */}

      <Text>Exercises for {selectedMuscle}:</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => handleExerciseSelect(item)} />
        )}
      />

      <Text>Selected exercises:</Text>
      <FlatList
        data={selectedExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle }

export default ExerciseList;
