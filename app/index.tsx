import { FlatList, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import { Link } from "expo-router"

import folders from "./mocks/folders"

export default function FoldersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Notification</Text>
      <FlatList
        data={folders}
        renderItem={({ item: { name } }) => {
          return (
            <Link href="/notebook" style={styles.folder}>
              <Text style={styles.btnTitle}>{name}</Text>
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
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 32
  },
  btnTitle: {
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
    textAlign: "center",
    backgroundColor: "#220A34",
  },
})
