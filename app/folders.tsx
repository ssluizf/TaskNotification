import { FlatList, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { Link } from "expo-router"

import folders from "./mocks/folders"

export default function FoldersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        renderItem={({ item: { name } }) => {
          return (
            <Link href="/notebook" style={styles.folder}>
              <Text style={styles.title}>{name}</Text>
            </Link>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: Constants.statusBarHeight + 64,
  },
  title: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  folder: {
    padding: 16,
    marginVertical: 8,
    alignSelf: "stretch",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 32,
    borderColor: "#94A3B8",
  },
})
