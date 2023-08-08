import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const Loading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <Button
        title="Go to TravelPath"
        onPress={() => navigation.navigate("TravelPath")}
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

export default Loading;
