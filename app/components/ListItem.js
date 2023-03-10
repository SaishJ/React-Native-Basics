import { View } from "react-native";
import AppText from "./AppText";

const ListItem = ({ title, description }) => {
  return (
    <View style={{ padding: 10 }}>
      <AppText>{title}</AppText>
      <AppText>{description}</AppText>
    </View>
  );
};

export default ListItem;
