import styles from "../../styles";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Button } from "react-native";
import BackIcon from "../../assets/icons/BackIcon";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";
import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

const TravelProfile2 = ({ navigation }) => {
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
  const [text, onChangeText] = useState("");
  const [text2, onChangeText2] = useState("");
  const [text3, onChangeText3] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);

  const showDatePicker = () => {
      setDatePickerVisibility(true);
  };

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
};
const showDatePicker3 = () => {
  setDatePickerVisibility3(true);
};


  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };
  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
};
const hideDatePicker3 = () => {
  setDatePickerVisibility3(false);
};

  const handleConfirm = (date) => {
    
    hideDatePicker();
    onChangeText(date.format("yyyy/MM/dd"))
  };

  const handleConfirm2 = (date) => {

    hideDatePicker2();
    onChangeText2(date.format("yyyy/MM/dd"))
  };
  const handleConfirm3 = (date) => {

    hideDatePicker3();
    onChangeText3(date.format("yyyy/MM/dd"))
  };

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
          height: "25%",
          alignItems: 'flex-start',
          padding:30,
        }}
      ><Text style={{fontWeight:"bold", fontSize:17, marginLeft:10}}>여행일자</Text> 
      <View style={{marginTop:5}}>
      <View style={{flexDirection:"row"}}>
            <Button title="여행 첫째날" onPress={showDatePicker} /><TextInput
                    pointerEvents="none"
                    style={{ fontSize:15, fontWeight:"bold", color:"#000000"}}
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text}
                />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
        <View style={{flexDirection:"row"}}>
            <Button title="여행 마지막날" onPress={showDatePicker2} />
            <TextInput
                    pointerEvents="none"
                    style={{ fontSize:15, fontWeight:"bold", color:"#000000"}}
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text2}
                />
            <DateTimePickerModal
                isVisible={isDatePickerVisible2}
                mode="date"
                onConfirm={handleConfirm2}
                onCancel={hideDatePicker2}
            />
        </View>
        <View style={{flexDirection:"row"}}>
            <Button title="핫플 방문 일자" onPress={showDatePicker3} />
            <TextInput
                    pointerEvents="none"
                    style={{ fontSize:15, fontWeight:"bold", color:"#000000"}}
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text3}
                />
            <DateTimePickerModal
                isVisible={isDatePickerVisible3}
                mode="date"
                onConfirm={handleConfirm3}
                onCancel={hideDatePicker3}
            />
        </View>
        </View>
      </View>
      <View style={{position:"absolute",bottom:30, width:"100%", padding:5}}>
        <TouchableOpacity onPress={() => navigation.navigate("TravelProfile2")}>
          <View style={{ backgroundColor:"#84C4D8",borderRadius:17, margin:10, width:"100%", height:50,marginBottom:2, padding:10, alignItems:"center", justifyContent:"center"}}><Text style={{fontSize:15, fontWeight:"bold", color:'#FFFFFF'}}>핫플레이스 추천 받기</Text></View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("TravelProfile1")}>
          <View style={{backgroundColor:"#FFFFFF", borderColor:"#000000", borderWidth:1, borderRadius:17,margin:10,marginTop:2, width:"100%", height:50, padding:10, alignItems:"center", justifyContent:'center'}}><Text style={{fontSize:15, fontWeight:"bold", color:'#000000'}}>이전</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TravelProfile2;
