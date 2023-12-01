import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import colors from "../constants/colors";
// import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <View style={styles.imgcontainer}>
        <Image
          source={require("../assets/gameover.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultcont}>
        <Text style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNum} </Text> rounds to
          Guess the Number {" "}
          <Text style={styles.highlight}>{props.userNum}</Text>
        </Text>
      </View>

      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgcontainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultcont: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  highlight: {
    color: colors.primary,
    // fontFamily:"open-span-bold",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOver;
