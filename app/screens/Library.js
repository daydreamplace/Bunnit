import { StyleSheet, Text, View } from "react-native";

const Library = () => {
  return (
    <View style={Style.libraryContainer}>
      <Text>Library</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  libraryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Library;
