import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "@rneui/base";
import { useTheme } from "@rneui/themed";

export default function _layout() {
  const { theme } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="antdesign" name="home" color={theme.colors.primary} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="antdesign" name="user" color={theme.colors.primary} />
          ),
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
