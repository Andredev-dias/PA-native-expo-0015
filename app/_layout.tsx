import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
// import { Lora_400Regular_Italic } from "@expo-google-fonts/lora";
// import { useFonts } from "expo-font";

import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded, error] = useFonts({
  //   Anton: require("../assets/fonts/Anton-Regular.ttf"),
  // });

  const [loaded, error] = useFonts({
    aaa: Inter_900Black,
    Anton: require("../assets/fonts/Anton-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </>
  );
}
