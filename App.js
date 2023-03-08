import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./src/components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(150, 150, 255)",
    alignItems: "center",
    justifyContent: "center",
  },
});
