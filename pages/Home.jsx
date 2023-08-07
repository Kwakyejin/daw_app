import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <Button
        title="Go to SelectTheme"
        onPress={() => navigation.navigate("SelectTheme")}
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

export default Home;
