import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TravelProfile from "./pages/TravelProfile";
import SelectPlace from "./pages/SelectPlace";
import Loading from "./pages/Loading";
import TravelPath from "./pages/TravelPath";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TravelProfile">
        <Stack.Screen name="TravelProfile" component={TravelProfile} />
        <Stack.Screen name="SelectPlace" component={SelectPlace} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="TravelPath" component={TravelPath} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
