import { useEffect } from "react"
import { Stack } from "expo-router"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"

import { useFonts } from "expo-font"

import * as SplashScreen from "expo-splash-screen"

import FontAwesome from "@expo/vector-icons/FontAwesome"

import { useColorScheme } from "@/components/useColorScheme"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

// TO DO FIX FONT FAMILY FOR EXPO 51

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="notebook" options={{ headerShown: false }} />
        <Stack.Screen name="note" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
