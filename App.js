import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 2 }} />
      <View style={{ backgroundColor: "gold", flex: 3 }} />
    </View>
  );
}
