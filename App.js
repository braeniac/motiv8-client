import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';

const View = styled.View`
  flex: 1; 
  background-color: #fff; 
  align-items: center; 
  justify-content: center;
`

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      <Text>hello world</Text>


    </View>
  );
}

