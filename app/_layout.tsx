import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import firebaseConfig from "../firebase/config/firebaseConfig";
import { FirebaseContextProvider } from "../firebase/context/FirebaseContextProvider";

export default function _layout() {
  return (
    <FirebaseContextProvider firebaseConfig={firebaseConfig}>
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
    </FirebaseContextProvider>
  );
}
