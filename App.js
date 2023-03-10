import { SafeAreaView, FlatList, Platform, StatusBar } from "react-native";
import ListItem from "./app/components/ListItem";
import Seprator from "./app/components/Seprator";

const data = [
  {
    id: 1,
    title: "T1",
    description: "D1",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
  },
];

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seprator}
      />
    </SafeAreaView>
  );
}
