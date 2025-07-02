import React from "react";

import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
const GoalInput = ({ addGoalInputHandler, visible, oncloseModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const handleAddGoal = () => {
    addGoalInputHandler(enteredGoalText);
    setEnteredGoalText("");
    oncloseModal();
  };
  return (
    <Modal visible={visible} AnimationEffect="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/adaptive-icon.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal "
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color={"#5e0acc"}
              onPress={handleAddGoal}
            />
          </View>

          <View style={styles.button}>
            <Button title="Close" onPress={oncloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 16,
    // borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  textInput: {
    width: "100%",
    padding: 16,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius:8,
    backgroundColor:"#ccc",
    color: "#1e0cdc",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  }
});
