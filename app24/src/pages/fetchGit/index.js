import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function SearchGitHubProfile() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const searchProfile = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (response.ok) {
        setUserData(data);
      } else {
        setUserData(null);
        alert('User not found. Please check the GitHub username.');
      }
    } catch (error) {
      console.error('Error searching profile:', error);
      alert('Error searching profile. Please check your internet connection.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search GitHub Profile</Text>

      {userData && (
        <View style={styles.avatarContainer}>
          <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter GitHub username"
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.button}>
        <Button title="Search" onPress={searchProfile} />
      </View>

      {userData && (
        <ScrollView style={ styles.resultContainer }>
          <Text style={styles.resultText}>ID: {userData.id}</Text>
          <Text style={styles.resultText}>Name: {userData.name}</Text>
          <Text style={styles.resultText}>Public Repositories: {userData.public_repos}</Text>
          <Text style={styles.resultText}>Created at: {new Date(userData.created_at).toLocaleDateString()}</Text>
          <Text style={styles.resultText}>Followers: {userData.followers}</Text>
          <Text style={styles.resultText}>Following: {userData.following}</Text>
        </ScrollView>
      )}
    </View>
  );
}