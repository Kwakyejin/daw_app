import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "../styles.js";
import SearchIcon from "../assets/icons/SearchIcon.jsx";

const Home = () => {
  return (
    <View style={styles.main}>
      <View
        style={{
          justifyContent: "center",
          height: "45%",
          width: "100%",
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <Text style={{ ...styles.mainTitle, marginTop: 150 }}>
          금주의 핫 플레이스
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#ffffff",
            marginTop: 15,
          }}
        >
          한주동안 가장 많이 저장한 스팟
        </Text>
        <View
          style={{
            marginTop: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 30,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#0C7190",
              marginHorizontal: 5,
            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#D9D9D9",
              marginHorizontal: 5,
            }}
          />
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#D9D9D9",
              marginHorizontal: 5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          height: "55%",
          width: "100%",
          marginTop: "auto",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 40,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderRadius: 20,
            backgroundColor: "#F1F1F1",
            width: "100%",
            height: 70,
          }}
        >
          <TextInput
            style={{
              width: "80%",
              height: "100%",
              fontSize: 24,
            }}
            placeholder="추천 여행 도시"
          />
          <SearchIcon />
        </View>
        <View
          style={{
            width: "100%",
            height: 150,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            추천 여행 경로
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              width: "100%",
              height: "100%",
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
          </ScrollView>
        </View>
        <View
          style={{
            width: "100%",
            height: 150,
            marginTop: 0,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            My daw
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              width: "100%",
              height: "100%",
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#F1F1F1",
                borderRadius: 20,
                marginRight: 20,
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
