import { View } from "react-native";

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
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          position: "relative",
          top: 20,
          left: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          position: "absolute",
          top: 20,
          right: 20,
        }}
      />
    </View>
  );
}
