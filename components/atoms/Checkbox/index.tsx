import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import ExpoCheckbox from "expo-checkbox"

type CheckboxProps = {
  label: string
  checked: boolean
  size?: "small" | "medium"
}

export default function Checkbox({ label, checked, size = "medium" }: CheckboxProps) {
  const [isChecked, setChecked] = useState(checked)

  const containerClasses = {
    medium: styles.containerMedium,
    small: styles.containerSmall,
  }

  const checkboxClasses = {
    medium: styles.checkboxMedium,
    small: styles.checkboxSmall,
  }

  const titleClasses = {
    medium: styles.titleMedium,
    small: styles.titleSmall,
  }

  return (
    <View style={containerClasses[size]}>
      <ExpoCheckbox
        style={checkboxClasses[size]}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#000000" : undefined}
      />
      <Text style={titleClasses[size]}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMedium: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  containerSmall: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  titleMedium: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  titleSmall: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  checkboxMedium: {
    margin: 0,
    width: 14,
    height: 14,
    borderColor: "#94A3B8",
    borderWidth: 1,
    borderRadius: 2,
  },
  checkboxSmall: {
    margin: 0,
    width: 10,
    height: 10,
    borderColor: "#94A3B8",
    borderWidth: 1,
    borderRadius: 2,
  },
})
