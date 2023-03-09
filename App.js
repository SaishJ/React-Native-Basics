import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <MaterialCommunityIcons name="account" size={50} color="dodgerblue" />
    </View>
  );
}
