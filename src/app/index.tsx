import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TRegistrationScreen() {
  const router=useRouter();
  const [userName, setUserName]=useState('');
  const [email, setEmail]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const [password, setPassword]=useState('');
const [confirmPassword, setConfirmPassword]=useState('');

const handleReview=()=>{
  if(!userName || !email || !phoneNumber || !password || !confirmPassword){
    Alert.alert('Error', 'Please fill in all fields.');
    return;
  }
  if(password!==confirmPassword){
    Alert.alert('Error', 'Passwords do not match.');
    return;
  }
  router.push({
    pathname:'/review',
    params:{userName, email, phoneNumber},
  });
};

return (
<View style={styles.container}>
  <Text style={styles.title}>Create your Account</Text>
  <TextInput style={styles.input} placeholder="Username" value={userName} onChangeText={setUserName} />
  <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
  <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
  <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
  <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
  <View style={styles.button}>
    <Button title="REVIEW INFO" onPress={handleReview} />
  </View>
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
  },
});