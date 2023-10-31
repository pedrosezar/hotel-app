import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{ title: "Crie seu cadastro" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
