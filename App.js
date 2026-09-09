import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.text}>Top</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.leftBox}>
          <Text style={styles.text}>Left</Text>
        </View>

        <View style={styles.rightBox}>
          <Text style={styles.text}>Right</Text>
        </View>
      </View>

      <View style={styles.bottomBox}>
        <Text style={styles.text}>Bottom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 10,
  },

  topBox: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flex: 2,
    flexDirection: 'row',
    gap: 10,
  },

  leftBox: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightBox: {
    flex: 2,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomBox: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});