import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./Tabs";
import HistoryDetailScreen from "../screens/HistoryDetailScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Bottom tabs */}
      <Stack.Screen name="MainTabs" component={Tabs} />

      {/* History drill-down */}
      <Stack.Screen
        name="HistoryDetail"
        component={HistoryDetailScreen}
      />
    </Stack.Navigator>
  );
}
