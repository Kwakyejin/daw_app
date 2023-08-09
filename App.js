import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import HomeIcon from "./assets/icons/HomeIcon";
import TravelStack from "./pages/Travel/TravelStack";
import TravelIcon from "./assets/icons/TravelIcon";
import HotPlaceStack from "./pages/HotPlace/HotPlaceStack";
import SpotIcon from "./assets/icons/SpotIcon";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

const Tab = AnimatedTabBarNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeBackgroundColor: "#84C4D8",
          activeTintColor: "#ffffff",
        }}
        appearance={{
          tabButtonLayout: "vertical",
          dotSize: "small",
        }}
      >
        <Tab.Screen
          name="Travel"
          component={TravelStack}
          options={{
            tabBarVisible: false,
            tabBarLabel: "New daw",
            tabBarIcon: ({ color }) => <TravelIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarVisible: true,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="HotPlace"
          component={HotPlaceStack}
          options={{
            tabBarVisible: false,
            tabBarLabel: "New spot",
            tabBarIcon: ({ color }) => <SpotIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
