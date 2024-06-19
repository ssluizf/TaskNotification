import { MaterialIcons } from "@expo/vector-icons"
import { useBottomSheet } from "@gorhom/bottom-sheet"
import { Pressable, StyleSheet } from "react-native"
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated"

type ButtonAnimatedProps = {
  minHeight: any
  maxHeight: any
}

export default function ButtonAnimated({
  minHeight,
  maxHeight,
}: Readonly<ButtonAnimatedProps>) {
  const { animatedIndex } = useBottomSheet()

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const bottom = interpolate(
      animatedIndex.value,
      [0, 1],
      [minHeight, 0],
      Extrapolation.CLAMP,
    )

    return {
      bottom,
    }
  })

  return (
    <Animated.View style={[styles.buttonIcon, buttonAnimatedStyle]}>
      <Pressable onPress={() => {}}>
        <MaterialIcons name="add" size={20} color="white" />
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  buttonIcon: {
    position: "absolute",
    backgroundColor: "#220A34",
    padding: 14,
    right: 0,
    borderRadius: 100,
  },
})
