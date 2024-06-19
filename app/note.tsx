import { useRef } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { Link } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet"

import checklist from "./mocks/checklist"
import Checkbox from "@/components/atoms/Checkbox"
import NotificationsModal from "@/components/molecules/NotificationsModal"

export default function NoteScreen() {
  const notificationsBottomSheetModalRef = useRef<BottomSheetModal>(null)
  const settingsBottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handleNotificationsPresentModalPress = () =>
    notificationsBottomSheetModalRef.current?.present()

  const handleSettingsPresentModalPress = () =>
    settingsBottomSheetModalRef.current?.present()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View style={styles.header}>
            <Link href="/notebook">
              <MaterialIcons name="arrow-back" size={20} color="white" />
            </Link>
            <View style={styles.headerLeft}>
              <Pressable
                onPress={handleNotificationsPresentModalPress}
                style={styles.buttonIcon}
              >
                <MaterialIcons name="notifications" size={20} color="white" />
              </Pressable>
              <Pressable
                onPress={handleSettingsPresentModalPress}
                style={styles.buttonIcon}
              >
                <MaterialIcons name="settings" size={20} color="white" />
              </Pressable>
            </View>
            <NotificationsModal
              ref={notificationsBottomSheetModalRef}
            />
          </View>
          <Text style={styles.title}>Lista de compras</Text>
          <View style={styles.checkboxList}>
            {checklist?.map((item, index) => (
              <Checkbox key={`checkbox-${index}`} {...item} />
            ))}
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: Constants.statusBarHeight + 16,
    gap: 32,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    marginVertical: -8,
    marginRight: -8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  checkboxList: {
    gap: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonIcon: {
    padding: 8,
  },
})
