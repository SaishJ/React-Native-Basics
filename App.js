import React, { useEffect, useState } from "react";
import { FlatList, Platform, StatusBar, SafeAreaView } from "react-native";
import axios from "axios";
import AppText from "./app/components/AppText";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => <AppText>{item.title}</AppText>}
      />
    </SafeAreaView>
  );
}
