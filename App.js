import { StyleSheet, SafeAreaView, Platform, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>I Love React Native!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
      android: {
        fontFamily: "sans-serif",
        fontSize: 20,
      },
    }),
  },
});
