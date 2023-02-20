import { useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const MonthlyCalender = () => {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      style={Style.calenderContainer}
      markingType={"custom"}
      markedDates={{
        [selected]: {
          customStyles: {
            container: {
              borderWidth: 2,
              borderColor: "skyblue",
            },
            text: {
              color: "black",
              fontWeight: "400",
            },
          },
        },
      }}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: "skyblue",
        arrowColor: "skyblue",
      }}
    />
  );
};

const Style = StyleSheet.create({
  calenderContainer: {
    marginTop: 50,
  },
});

export default MonthlyCalender;
