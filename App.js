import { SafeAreaView, Platform, StatusBar } from "react-native";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const pickerItems = [
    { id: 1, label: "Clothing" },
    { id: 2, label: "Cameras" },
    { id: 3, label: "TV" },
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <AppPicker items={pickerItems} />
    </SafeAreaView>
  );
}
