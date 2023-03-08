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
          alignSelf: "flex-start",
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 200 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 300 }} />
    </View>
  );
}
