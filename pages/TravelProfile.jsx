import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const TravelProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>TravelProfile</Text>
      <Button
        title="Go to SelectPlace"
        onPress={() => navigation.navigate("SelectPlace")}
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

export default TravelProfile;
