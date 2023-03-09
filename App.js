import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", // [determines the alignment of items within each line]
        flexWrap: "wrap",
        alignContent: "flex-end", // only work when flexWrap peoperty is used. [determines the alignment of entire container]
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
    </View>
  );
}
