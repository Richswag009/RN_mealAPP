import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDelete(itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 10,
    color: "white",
  },
});
