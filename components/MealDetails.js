import React from "react";
import { StyleSheet, Text, View } from "react-native";
const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text>{duration}m</Text>
      <Text>{complexity.toUpperCase()}</Text>
      <Text>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    justifyContent: "center",
    fontFamily: "open-sans-bold",

    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
