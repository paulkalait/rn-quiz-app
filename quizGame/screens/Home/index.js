import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles.js';
import Title from '../../components/title.js';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title />
      <View></View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
