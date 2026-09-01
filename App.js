import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Top row: three boxes side by side */}
      <View style={styles.row}>
        <View style={[styles.box, styles.boxPink]}>
          <Text style={styles.label}>1</Text>
        </View>
        <View style={[styles.box, styles.boxBlue]}>
          <Text style={styles.label}>2</Text>
        </View>
        <View style={[styles.box, styles.boxTan]}>
          <Text style={styles.label}>3</Text>
        </View>
      </View>

      {/* Bottom section: one big box that takes more space */}
      <View style={styles.bigBoxWrapper}>
        <View style={styles.bigBox}>
          <Text style={styles.label}>Big Box (flex: 4)</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // Row of 3 boxes, laid out horizontally
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },

  box: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  boxPink: { backgroundColor: 'pink' },
  boxBlue: { backgroundColor: 'lightblue' },
  boxTan: { backgroundColor: 'tan' },

  // Bottom big box, wider and using more flex
  bigBoxWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigBox: {
    flex: 1,
    height: 150,
    width: '80%',
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkslategray',
  },
});
