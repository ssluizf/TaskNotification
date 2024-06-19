import React, { useMemo } from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { BottomSheetHandleProps } from "@gorhom/bottom-sheet"

// @ts-ignore
export const transformOrigin = ({ x, y }, ...transformations) => {
  "worklet"
  return [
    { translateX: x },
    { translateY: y },
    ...transformations,
    { translateX: x * -1 },
    { translateY: y * -1 },
  ]
}

const HANDLE_PADDING = 14;
const HANDLE_HEIGHT = 4;

export const HANDLE_OVERALL_HEIGHT = HANDLE_HEIGHT + (2 * HANDLE_PADDING);

interface CustomHandleProps extends BottomSheetHandleProps {
  style?: StyleProp<ViewStyle>
}

const CustomHandle: React.FC<CustomHandleProps> = ({ style, animatedIndex }) => {
  const containerStyle = useMemo(() => [styles.header, style], [style])
  const leftIndicatorStyle = useMemo(
    () => ({
      ...styles.indicator,
      ...styles.leftIndicator,
    }),
    [],
  )
  const rightIndicatorStyle = useMemo(
    () => ({
      ...styles.indicator,
      ...styles.rightIndicator,
    }),
    [],
  )
  return (
    <View
      style={[containerStyle]}
      renderToHardwareTextureAndroid={true}
    >
      <View style={[leftIndicatorStyle]} />
      <View style={[rightIndicatorStyle]} />
    </View>
  )
}

export default CustomHandle

const styles = StyleSheet.create({
  header: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111113",
    paddingVertical: HANDLE_PADDING,
    borderBottomWidth: 1,
    borderBottomColor: "#111113",
  },
  indicator: {
    position: "absolute",
    width: 10,
    height: HANDLE_HEIGHT,
    backgroundColor: "#fff",
  },
  leftIndicator: {
    borderTopStartRadius: 2,
    borderBottomStartRadius: 2,
  },
  rightIndicator: {
    borderTopEndRadius: 2,
    borderBottomEndRadius: 2,
  },
})
