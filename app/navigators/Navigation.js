import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, AntDesign, Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import Library from "../screens/Library";
import MyPage from "../screens/MyPage";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CALENDAR"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LIBRARY"
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MY PAGE"
        component={MyPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
