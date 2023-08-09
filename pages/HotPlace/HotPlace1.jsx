import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import BackIcon from "../../assets/icons/BackIcon";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";

const HotPlace1 = ({ navigation }) => {
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
          height: "28%",
          padding:30,
        }}
      ><Text style={{fontWeight:"bold", fontSize:17, marginLeft:10}}>카테고리를 선택해주세요.</Text>
      <View style={{display: "flex",
            flexDirection: "row",
            flexWrap:"wrap",
            margin:10}}>
              <TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>팝업</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>콘서트</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>지역 축제</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>전시회</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>문화관광지</Text>
        </View></TouchableOpacity>
        </View>
    </View>
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#F2F2F2",
          borderRadius: 30,
          width: "100%",
          height: "38%",
          padding:30,
        }}
      ><Text style={{fontWeight:"bold", fontSize:17, marginLeft:10}}>#를 선택해주세요.</Text>
      <View style={{display: "flex",
            flexDirection: "row",
            flexWrap:"wrap",
            margin:10}}>
              <TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>분위기 있는</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>활동적인</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>자연</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>조용한</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>아늑한</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>포토존</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>사람많은</Text>
        </View></TouchableOpacity><TouchableOpacity>
      <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,
            margin:2.5}}>
        <Text>아이와 함께</Text>
        </View></TouchableOpacity>
        <TouchableOpacity><View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,margin:2.5}}>
        <Text style={{fontSize:15}}>부모님과 함께</Text>
        </View></TouchableOpacity>

        <TouchableOpacity>
        <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,margin:2.5}}>
        <Text style={{fontSize:15}}>휴양</Text>
        </View></TouchableOpacity>
        <TouchableOpacity>
        <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,margin:2.5}}>
        <Text style={{fontSize:15}}>문화, 유적</Text>
        </View></TouchableOpacity>
        <TouchableOpacity>
        <View style={{ 
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            padding: 10,margin:2.5}}>
        <Text style={{fontSize:15}}>유흥</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{position:"absolute",bottom:30, width:"100%", padding:5}}>
        <TouchableOpacity onPress={() => navigation.navigate("HotPlace2")}>
          <View style={{ backgroundColor:"#84C4D8",borderRadius:17, margin:10, width:"100%", height:50,marginBottom:2, padding:10, alignItems:"center", justifyContent:"center"}}><Text style={{fontSize:15, fontWeight:"bold", color:'#FFFFFF'}}>다음</Text></View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={{backgroundColor:"#FFFFFF", borderColor:"#000000", borderWidth:1, borderRadius:17,margin:10,marginTop:2, width:"100%", height:50, padding:10, alignItems:"center", justifyContent:'center'}}><Text style={{fontSize:15, fontWeight:"bold", color:'#000000'}}>이전</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HotPlace1;