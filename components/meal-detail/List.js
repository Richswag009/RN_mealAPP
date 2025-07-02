import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
const List = ({ data }) => {
  return data.map((dataPoint, i) => (
    <View  key={i} style={styles.listItem}>
      <Text style={styles.itemText} key={i}>
        {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#35104f",
  },
  itemText: {
    textAlign: "center",
    color: "white",
  },
});
