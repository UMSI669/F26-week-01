import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.child1}></View>
      <View style={styles.child2}>
        <View style={styles.sub}>
          <Text style={styles.textwhite}>Hello World</Text>
        </View>
        <View style={styles.sub}>
          <Text>Another Block</Text>
        </View>
      </View>
      <View style={styles.child3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "stretch",
  },
  child1: {
    flex: 1,
    backgroundColor: "blue",
  },
  child2: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "green",
  },
  sub: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textwhite: {
    color: "#fff",
  },
  child3: {
    flex: 1,
    backgroundColor: "#f44",
  },
});
