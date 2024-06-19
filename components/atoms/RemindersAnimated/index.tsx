import { MaterialIcons } from "@expo/vector-icons"
import { useBottomSheet } from "@gorhom/bottom-sheet"
import { StyleSheet, Text, View } from "react-native"
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated"

export default function RemindersAnimated() {
  const { animatedIndex } = useBottomSheet()

  const containerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    )

    return {
      opacity,
    }
  })

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <View style={styles.divider} />
      <View style={styles.reminder}>
        <MaterialIcons name="notifications" size={20} color="white" />
        <Text style={styles.text}>09/06/2024 13:00 - Remédio</Text>
      </View>
      <View style={styles.reminder}>
        <MaterialIcons name="notifications" size={20} color="white" />
        <Text style={styles.text}>09/06/2024 13:00 - Consulta</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  reminder: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 14,
    borderWidth: 1,
    borderRadius: 32,
    backgroundColor: "#000000",
  },
  divider: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#696E77",
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF",
  },
})
