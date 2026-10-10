
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Flexbox</Text>

      <View style={styles.boxContainer}>
        <View style={styles.redBox}>
          <Text>Box 1</Text>
        </View>

        <View style={styles.blueBox}>
          <Text>Box 2</Text>
        </View>

        <View style={styles.greenBox}>
          <Text>Box 3</Text>
        </View>
      </View>

      <StatusBar style="auto" />
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  redBox: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  blueBox: {
    width: 90,
    height: 90,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  greenBox: {
    width: 90,
    height: 90,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
