import { SafeAreaView, Platform, StatusBar } from "react-native";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <AppPicker />
    </SafeAreaView>
  );
}
