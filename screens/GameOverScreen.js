import React from "react";
import Title from "../components/UI/Title";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({roundsNumber,userNumber ,onStartNewGame}) => {
  let x = 4;
  let y = 10;
  return (
    <View style={styles.rootContainer}>
      <Title> GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>

      <Text style={styles.summaryText}>
        {" "}
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>

      <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderWidth: 3,
    overflow: "hidden",
    borderColor: Colors.primary700,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
