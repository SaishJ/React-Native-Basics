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
          padding: 25,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      />
    </View>
  );
}
