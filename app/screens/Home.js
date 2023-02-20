import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  return (
    <View style={Style.homeContainer}>
      <Text>Home</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
