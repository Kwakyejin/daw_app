import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const TravelPath = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>TravelPath</Text>
      <Button
        title="Go to TravelProfile"
        onPress={() => navigation.navigate("TravelProfile")}
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

export default TravelPath;
