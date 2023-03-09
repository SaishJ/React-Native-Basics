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
          flexBasis: 300, // map width or height property [Set the size of an item along with primary axis]
          // width: 100,
          height: 100,
          flexGrow: 1, // To fill available space
          flexShrink: 1, // shrink children along the main axis in the case the total size of the children overflows the size of the container on the main axis.
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
    </View>
  );
}
