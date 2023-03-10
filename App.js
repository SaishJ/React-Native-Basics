import { SafeAreaView, Platform, StatusBar, Switch, Text } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>{value === true ? "ON" : "OFF"}</Text>
      <Switch value={value} onValueChange={(newValue) => setValue(newValue)} />
    </SafeAreaView>
  );
}
