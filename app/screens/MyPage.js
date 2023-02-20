import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MyPage = () => {
  return (
    <View style={Style.myPageContainer}>
      <Text>MyPage</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  myPageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyPage;
