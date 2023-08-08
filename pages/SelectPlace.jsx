import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const SelectPlace = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>SelectPlace</Text>
      <Button
        title="Go to Loading"
        onPress={() => navigation.navigate("Loading")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SelectPlace;
