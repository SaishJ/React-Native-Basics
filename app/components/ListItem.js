import { View } from "react-native";
import AppText from "./AppText";

const ListItem = ({ title, description }) => {
  return (
    <View style={{ borderBottomWidth: 1, borderColor: "grey" }}>
      <AppText>{title}</AppText>
      <AppText>{description}</AppText>
    </View>
  );
};

export default ListItem;
