import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ScanScreen from "../screens/ScanScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ReportScreen from "../screens/ReportScreen";
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
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Scan":
              iconName = "shield-checkmark";
              break;
            case "History":
              iconName = "time";
              break;
            case "Report":
              iconName = "alert-circle";
              break;
            case "About":
              iconName = "information-circle";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
