import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Home Page!</Text>
      <Text style={styles.description}>
        This is a simple React Native home page example.gour
      </Text>

      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:'green'
  },
  header: {
    fontSize: 24,
    fontWeight:'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 35,
  },
});

export default Home;
