import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import BackIcon from "../../assets/icons/BackIcon";

const TravelProfile1 = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginHorizontal: 16,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <BackIcon />
        </TouchableOpacity>
      ),
      headerTitle: "여행 프로필 작성",
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          height: 8,
          width: "100%",
          backgroundColor: "#F2F2F2",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "20%",
            backgroundColor: "#84C4D8",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#f2f2f2",
          borderRadius: 30,
          width: "100%",
          height: 170,
        }}
      ></View>
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#f2f2f2",
          borderRadius: 30,
          width: "100%",
          height: 300,
        }}
      ></View>
    </View>
  );
};

export default TravelProfile1;
