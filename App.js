import { StyleSheet, Text, View } from 'react-native'
import HomePage from './src/pages/HomePage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/pages/Login'
import LandPage from './src/pages/LandPage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LandPage" component={LandPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
