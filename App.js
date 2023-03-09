import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontStyle: "italic",
          fontWeight: "500",
          color: "tomato",
        }}
      >
        I Love eact Native! Use for build native apps using JavaScript
      </Text>
    </View>
  );
}
