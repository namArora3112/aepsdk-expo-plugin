import { StyleSheet, Text, View } from 'react-native';

import * as AepsdkExpoPlugin from 'aepsdk-expo-plugin';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{AepsdkExpoPlugin.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});