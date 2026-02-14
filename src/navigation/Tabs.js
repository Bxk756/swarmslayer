import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import ScanScreen from '../screens/ScanScreen';
import StatsScreen from '../screens/StatsScreen';
import DeterrentScreen from '../screens/DeterrentScreen';
import HistoryScreen from '../screens/HistoryScreen';
import EducationScreen from '../screens/EducationScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a0f1c',
          borderTopColor: '#1c2438',
          height: 65,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#64748b',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Scan') {
            iconName = 'shield-checkmark';
          } else if (route.name === 'Stats') {
            iconName = 'stats-chart';
          } else if (route.name === 'Deterrent') {
            iconName = 'megaphone';
          } else if (route.name === 'History') {
            iconName = 'time';
          } else if (route.name === 'Education') {
            iconName = 'school';
          } else if (route.name === 'About') {
            iconName = 'information-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Deterrent" component={DeterrentScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Education" component={EducationScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
