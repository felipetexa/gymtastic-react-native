import React from "react";
import { View, Text, TextInput, Button, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleGoogleLogin = () => {
    // Logic for handling Google login
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the sign up page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => navigation.navigate('LandPage', {name: 'Felipe'})} />
      <TouchableOpacity onPress={handleGoogleLogin}>
        <Text style={styles.googleLoginText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  } as TextStyle,
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  }  as TextStyle,
  googleLoginText: {
    marginTop: 10,
    textDecorationLine: 'underline',
    color: 'blue',
  } as TextStyle,
  signupText: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'gray',
  } as TextStyle,
};

export default Login;