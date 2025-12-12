import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DeterrentScreen from "../screens/DeterrentScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#020617",
          borderTopColor: "#1e293b"
        },
        tabBarActiveTintColor: "#60a5fa",
        tabBarInactiveTintColor: "#64748b"
      }}
    >
      <Tab.Screen name="Scan" component={HomeScreen} />
      <Tab.Screen name="Deterrent" component={DeterrentScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
