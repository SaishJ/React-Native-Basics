import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.items}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  items: {
    padding: 10,
    fontSize: 15,
  },
});

export default PickerItem;
