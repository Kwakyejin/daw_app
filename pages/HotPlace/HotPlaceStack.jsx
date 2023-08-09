import styles from "../../styles";
import { createStackNavigator } from "@react-navigation/stack";
import HotPlace1 from "./HotPlace1";
import HotPlace2 from "./HotPlace2";
import HotPlace3 from "./HotPlace3";
import HotPlace4 from "./HotPlace4";

const Stack = createStackNavigator();

const HotPlaceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen initialRouteName="HotPlace1" name="HotPlace1" component={HotPlace1} />
      <Stack.Screen name="HotPlace2" component={HotPlace2} />
      <Stack.Screen name="HotPlace3" component={HotPlace3} />
      <Stack.Screen name="HotPlace4" component={HotPlace4} />
    </Stack.Navigator>
  );
};

export default HotPlaceStack;


