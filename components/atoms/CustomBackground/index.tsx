import React, { useMemo } from "react"
import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

const CustomBackground: React.FC<BottomSheetBackgroundProps> = ({ style }) => {
  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    backgroundColor: "#111113",
  }))
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  )
  //#endregion

  // render
  return <Animated.View pointerEvents="none" style={containerStyle} />
}

export default CustomBackground
