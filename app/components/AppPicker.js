import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppPicker = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="apps" size={20} style={styles.icon} />
      <Text style={styles.text}>Category</Text>
      <MaterialCommunityIcons name="chevron-down" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 25,
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
