import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flex Layout Demo</Text>

      <View style={styles.row}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.green]} />
      </View>

      <View style={styles.column}>
        <View style={[styles.wideBox, styles.orange]} />
        <View style={[styles.wideBox, styles.purple]} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  column: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  box: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  wideBox: {
    height: 80,
    borderRadius: 8,
  },
  red: {
    backgroundColor: '#e74c3c',
  },
  blue: {
    backgroundColor: '#3498db',
  },
  green: {
    backgroundColor: '#2ecc71',
  },
  orange: {
    backgroundColor: '#e67e22',
  },
  purple: {
    backgroundColor: '#9b59b6',
  },
});
