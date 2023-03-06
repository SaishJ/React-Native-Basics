import { StyleSheet, View, SafeAreaView } from "react-native";

export default function App() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
