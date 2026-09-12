import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />
      <View style={styles.view4} />
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  view1: {
   flex: 0.2,
   width: 100,
   height: 100,
   backgroundColor: 'orange',
  },
  view2: {
   flex: 0.2,
   backgroundColor: 'white',
   width: 100,
   height: 100,
  },
  view3: {
   flex: 0.2,
   backgroundColor: 'lightblue',
   width: 100,
   height: 100,
  },
  view4: {
   flex: 0.2,
   backgroundColor: 'purple',
   width: 100,
   height: 100,
  }
});
