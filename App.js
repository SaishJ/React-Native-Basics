import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text click");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - A framework for building native apps using
        JavaScript.
      </Text>
      <TouchableHighlight
        onPress={() => console.log("Image tapped (With Highlight).")}
      >
        <Image
          fadeDuration={1000}
          source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
        />
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => console.log("Image tapped (With Opacity).")}
      >
        <Image
          fadeDuration={1000}
          source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
        />
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={() => console.log("Image tapped (Without Feedback).")}
      >
        <Image
          fadeDuration={1000}
          source={{ width: 200, height: 200, uri: "https://picsum.photos/200" }}
        />
      </TouchableWithoutFeedback>
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
