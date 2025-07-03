import React from "react";
import { Button, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ icon, color, onPressHandler }) => {
  return (
    <Pressable onPress={onPressHandler}>
      <Ionicons
        name={icon}
        size={24}
        color={color}
        style={({ pressed }) => pressed && styles.pressed}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
