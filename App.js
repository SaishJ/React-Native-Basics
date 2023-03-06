import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text click");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - A framework for building native apps using
        JavaScript.
      </Text>
      <Image source={require("./assets/react.png")} />
      <Image
        fadeDuration={1000}
        source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
