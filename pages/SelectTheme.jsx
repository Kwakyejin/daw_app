import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const SelectTheme = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>SelectTheme</Text>
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
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

export default SelectTheme;
