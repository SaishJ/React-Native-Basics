import { StyleSheet, View, SafeAreaView, Text } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text click");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - A framework for building native apps using
        JavaScript.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
