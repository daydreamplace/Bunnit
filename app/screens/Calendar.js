import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Calendar = () => {
  return (
    <View style={Style.calenderContainer}>
      <Text>Calendar</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  calenderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Calendar;
