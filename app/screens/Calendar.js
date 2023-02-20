import { StyleSheet, View, Text } from "react-native";
import MonthlyCalendar from "../components/Calendar/MonthlyCalendar";

const Calendar = () => {
  return (
    <View style={Style.calenderContainer}>
      <MonthlyCalendar />
    </View>
  );
};

const Style = StyleSheet.create({
  calenderContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Calendar;
