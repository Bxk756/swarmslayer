import React from "react";
import { View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 20
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 90,
          height: 90,
          marginBottom: 10
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 26,
          fontWeight: "900",
          color: "white",
          letterSpacing: 1
        }}
      >
        SWARMSLAYER
      </Text>
      <Text
        style={{
          color: "#ef4444",
          fontWeight: "700",
          marginTop: 4
        }}
      >
        Swarm Shield LLC
      </Text>
    </View>
  );
}
