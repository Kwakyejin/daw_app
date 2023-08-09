import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import BackIcon from "../../assets/icons/BackIcon";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";

const HotPlace4 = ({ navigation }) => {
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
          backgroundColor: "#F2F2F2",
          borderRadius: 30,
          width: "100%",
          height: "18%",
          alignItems: 'flex-start',
          padding:20,
          paddingLeft:30,
        }}
      ><Text style={{fontWeight:"bold", fontSize:17}}>위치를 입력해주세요.</Text> 
      
     <View style={{ backgroundColor:'D9D9D9', borderRadius:10, borderColor:"#84C4D8" }}>
     <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderRadius: 20,
            backgroundColor: "#D9D9D9",
            width: "100%",
            height: "63%",
            padding: 10,
          }}
        >
          <TextInput
            style={{
              width: "80%",
              height: "100%",
              fontSize: 24,
            }}
            placeholder=""
          />
          <TouchableOpacity>
          <SearchIcon /></TouchableOpacity>
        </View></View>
      
      </View>
      <View style={{position:"absolute",bottom:30, width:"100%", padding:5}}>
        <TouchableOpacity >
          <View style={{ backgroundColor:"#84C4D8",borderRadius:17, margin:10, width:"100%", height:50,marginBottom:2, padding:10, alignItems:"center", justifyContent:"center"}}><Text style={{fontSize:15, fontWeight:"bold", color:'#FFFFFF'}}>다음</Text></View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("HotPlace3")}>
          <View style={{backgroundColor:"#FFFFFF", borderColor:"#000000", borderWidth:1, borderRadius:17,margin:10,marginTop:2, width:"100%", height:50, padding:10, alignItems:"center", justifyContent:'center'}}><Text style={{fontSize:15, fontWeight:"bold", color:'#000000'}}>이전</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HotPlace4;