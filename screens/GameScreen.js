import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  useWindowDimensions,
  Platform
} from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import generateRandomBetween from "../utils/utils";
import InstructionText from "../components/UI/InstructionText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

const GameScreen = ({ userNumber, onGameOver }) => {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [curenttGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && curenttGuess < userNumber) ||
      (direction === "higher" && curenttGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = curenttGuess - 1;
    } else {
      minBoundary = curenttGuess + 1;
    }
    const newRandNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      curenttGuess
    );
    setCurrentGuess(newRandNumber);
    setGuessRounds((prevRounds) => [newRandNumber, ...prevRounds]);
  };

  useEffect(() => {
    if (curenttGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [curenttGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  let content = (
    <>
      {" "}
      <NumberContainer> {curenttGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          {" "}
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              {" "}
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>

          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>
          {" "}
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              {" "}
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <NumberContainer> {curenttGuess}</NumberContainer>

          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  console.log(Platform.Version)
  return (
    <View style={styles.container}>
      <Title>Opponent Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item.index}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRounds.length - itemData.index}
                itemData={itemData}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  instructionText: {
    marginButton: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
