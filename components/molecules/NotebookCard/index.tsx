import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { router } from "expo-router"

import Checkbox from "@/components/atoms/Checkbox"

type NotebookCardProps = {
  title: string
  checklist?: { label: string; checked: boolean }[]
}

export default function NotebookCard({ title, checklist }: NotebookCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("/note")}
      activeOpacity={1}
    >
      <Text style={styles.title}>{title}</Text>
      {checklist?.map((item, index) => (
        <Checkbox key={`checkbox-${index}`} size="small" {...item} />
      ))}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#9C3FE6",
    backgroundColor: "#220A34",
  },
  title: {
    fontSize: 12,
    color: "#FFFFFF",
  },
})
