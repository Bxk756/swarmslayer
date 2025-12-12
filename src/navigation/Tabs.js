import { Ionicons } from "@expo/vector-icons";
<Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#020617",
      borderTopColor: "#1e293b"
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
    }
  })}
>
