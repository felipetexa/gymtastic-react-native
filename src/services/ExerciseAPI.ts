import axios from 'axios';

const BASE_URL = 'https://api.api-ninjas.com/v1/exercises';

export const fetchExercisesByMuscle = async (muscle: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?muscle=${muscle}`, {headers: { 'X-Api-Key': 'SGb/bvi9X3kbGLXAQr2S4g==Spf5vpgN8urGt2aL' },});
    return response.data;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error;
  }
};
