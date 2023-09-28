import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useColorScheme } from 'react-native'

export default function SoporteLayout() {
  return (
    <Tabs>
      {/* <Stack.Screen
        name="screen2"
        options={{
          presentation: 'modal',
          title: 'Hi Man',
        }}
      /> */}
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="screen2"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  )
}
