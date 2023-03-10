import { SafeAreaView, FlatList, Platform, StatusBar } from "react-native";
import Input from "./app/components/Input";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        margin: 10,
      }}
    >
      <Input />
    </SafeAreaView>
  );
}
