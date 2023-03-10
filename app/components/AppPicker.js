import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import PickerItem from "./PickerItem";

const AppPicker = ({ items, onChangeItem, selectItem }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="apps" size={20} style={styles.icon} />
          <Text style={styles.text}>{selectItem}</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <Button color="#ddd" title="Close" onPress={() => setModal(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModal(false);
                onChangeItem(item.label);
              }}
            />
          )}
        />
      </Modal>
    </>
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
