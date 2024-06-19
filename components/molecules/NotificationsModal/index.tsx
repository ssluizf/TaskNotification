import React, { forwardRef, useMemo, useState } from "react"
import { Text, StyleSheet, View, Dimensions } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet"
import DateTimePicker from "@react-native-community/datetimepicker"

import CustomBackground from "@/components/atoms/CustomBackground"
import CustomHandle, {
  HANDLE_OVERALL_HEIGHT,
} from "@/components/atoms/CustomHandle"
import RemindersAnimated from "@/components/atoms/RemindersAnimated"
import ButtonAnimated from "@/components/atoms/ButtonAnimated"

const NotificationsModal = forwardRef<BottomSheetModal>((_, ref) => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState<any>("date")
  const [show, setShow] = useState(false)

  const snapPoints = useMemo(() => ["25%", "50%"], [])

  const getHeight = (snapHeight: number) => {
    return Dimensions.get("window").height * snapHeight
  }

  const minHeight = getHeight(0.25);
  const maxHeight = getHeight(0.5);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode: any) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode("date")
  }

  const showTimepicker = () => {
    showMode("time")
  }

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backgroundComponent={(props) => <CustomBackground {...props} />}
      handleComponent={(props) => <CustomHandle {...props} />}
    >
      <BottomSheetView>
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar lembrete</Text>
          <View style={styles.input}>
            <MaterialIcons name="notifications" size={20} color="white" />
            <Text style={styles.text}>09/06/2024 13:00</Text>
          </View>
          <RemindersAnimated />
          <ButtonAnimated minHeight={minHeight} maxHeight={maxHeight} />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default NotificationsModal

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.5 - HANDLE_OVERALL_HEIGHT,
    position: "relative",
    marginHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 14,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: "#FFFFFF",
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF",
  },
})
