import { StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

import notebook from "./mocks/notebook"
import NotebookCard from "@/components/molecules/NotebookCard"

export default function NotebookScreen() {
  return (
    <View style={styles.container}>
      <Link href="/folders">
        <MaterialIcons name="arrow-back" size={20} color="white" />
      </Link>
      <Text style={styles.title}>Categoria</Text>
      <View style={styles.columns}>
        {notebook.map((item, index) => (
          <View key={`note-${index}`} style={styles.item}>
            <NotebookCard {...item} />
          </View>
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
  columns: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 300,
  },
  item: {
    width: "50%",
    paddingHorizontal: 5,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },
})
