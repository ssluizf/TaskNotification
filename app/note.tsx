import { StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { Link } from "expo-router"
import { MaterialIcons } from '@expo/vector-icons';

import checklist from "./mocks/checklist";
import Checkbox from "@/components/atoms/Checkbox";

export default function NoteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/notebook">
          <MaterialIcons name="arrow-back" size={20} color="white" />
        </Link>
        <View style={styles.headerLeft}>
          <MaterialIcons name="notifications" size={20} color="white" />
          <MaterialIcons name="settings" size={20} color="white" />
        </View>
      </View>
      <Text style={styles.title}>Lista de compras</Text>
      <View style={styles.checkboxList}>
        {checklist?.map((item, index) => (
          <Checkbox key={`checkbox-${index}`} {...item} />
        ))}
      </View>
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
    justifyContent: "space-between"
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
    gap: 24
  }
})
