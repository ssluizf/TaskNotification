import { useCallback, useRef, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { Link } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"

import checklist from "./mocks/checklist"
import Checkbox from "@/components/atoms/Checkbox"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function NoteScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const [openNotification, setOpenNotification] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/notebook">
          <MaterialIcons name="arrow-back" size={20} color="white" />
        </Link>
        <View style={styles.headerLeft}>
          <Pressable onPress={() => setOpenNotification(true)}>
            <MaterialIcons name="notifications" size={20} color="white" />
          </Pressable>
          <Pressable onPress={() => setOpenSettings(true)}>
            <MaterialIcons name="settings" size={20} color="white" />
          </Pressable>
        </View>
      </View>
      <Text style={styles.title}>Lista de compras</Text>
      <View style={styles.checkboxList}>
        {checklist?.map((item, index) => (
          <Checkbox key={`checkbox-${index}`} {...item} />
        ))}
      </View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={["100%"]}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
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
    gap: 16,
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
})
