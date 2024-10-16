import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Text, StyleSheet } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
  <>
   <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
   </Stack>
  </>
   
  );
}
