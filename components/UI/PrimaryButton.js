import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/Colors";

const PrimaryButton = ({ children,onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.container}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
