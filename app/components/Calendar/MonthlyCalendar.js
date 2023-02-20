import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

const MonthlyCalender = () => {
  return (
    <View style={Style.calenderContainer}>
      <Calendar />
    </View>
  );
};

const Style = StyleSheet.create({
  calenderContainer: {
    marginTop: 50,
  },
});

export default MonthlyCalender;
