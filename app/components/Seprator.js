import { View, StyleSheet } from "react-native";
import React from "react";

const Seprator = () => {
  return <View style={styles.seprator} />;
};

const styles = StyleSheet.create({
  seprator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f8f4f4",
  },
});

export default Seprator;
