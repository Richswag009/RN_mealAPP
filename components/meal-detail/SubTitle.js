import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497 ",

    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
