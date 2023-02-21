import { useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const MonthlyCalender = () => {
  const [selected, setSelected] = useState("");

  const selectedDates = {
    [selected]: {
      customStyles: {
        container: {
          borderWidth: 2,
          borderColor: "skyblue",
        },
        text: {
          color: "black",
          fontWeight: "400",
          textAlign: "center",
        },
      },
    },
  };

  const calendarTheme = {
    arrowColor: "skyblue",
    textMonthFontWeight: "bold",
    todayTextColor: "skyblue",
    "stylesheet.calendar.header": {
      dayTextAtIndex0: {
        color: "red",
      },
      dayTextAtIndex6: {
        color: "skyblue",
      },
    },
  };

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  return (
    <Calendar
      style={Style.calenderContainer}
      markingType={"custom"}
      markedDates={selectedDates}
      onDayPress={onDayPress}
      theme={calendarTheme}
    />
  );
};

const Style = StyleSheet.create({
  calenderContainer: {
    marginTop: 50,
  },
});

export default MonthlyCalender;
