import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  view1: {
    flex: 0.2,
    backgroundColor: "lightblue",
    width: 200,
    height: 200,
  },
  view2: {
    flex: 0.2,
    backgroundColor: "pink",
    width: 200,
    height: 200,
  },
  view3: {
    flex: 0.2,
    backgroundColor: "tan",
    width: 200,
    height: 200,
  },
});
