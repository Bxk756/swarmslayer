import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import your screens
import ScanScreen from "../screens/ScanScreen";
import DeterrentScreen from "../screens/DeterrentScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#020617",
          borderTopColor: "#1e293b",
        },
        tabBarActiveTintColor: "#ef4444",
        tabBarInactiveTintColor: "#64748b",
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === "Scan") icon = "shield-checkmark";
          if (route.name === "Deterrent") icon = "megaphone";
          if (route.name === "History") icon = "time";
          if (route.name === "About") icon = "information-circle";

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Deterrent" component={DeterrentScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

