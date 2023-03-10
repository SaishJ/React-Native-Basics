import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Input = () => {
  const [firstName, setFirstName] = useState("John");

  return (
    <View>
      <Text>{firstName}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Enter First Name"
        onChangeText={(text) => setFirstName(text)}
        keyboardType="numeric"
      />
    </View>
  );
};

export default Input;
