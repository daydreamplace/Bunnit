import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Calender from "../screens/Calender";
import Library from "../screens/Library";
import MyPage from "../screens/MyPage";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="HOME" component={Home} />
      <Tab.Screen name="CALENDER" component={Calender} />
      <Tab.Screen name="LIBRARY" component={Library} />
      <Tab.Screen name="MY PAGE" component={MyPage} />
    </Tab.Navigator>
  );
};

export default Navigation;
