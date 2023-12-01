import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return randomNum;
  }
};

//itemData: default argument in react native and its object have index.. will added at the end of item
const renderListItems = (listLength, itemData) => (
  <View style={styles.listItem}>
    <Text>#{listLength - itemData.index}</Text>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomNum(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  // const [rounds, setRounds] = useState(0);
  const [pastGuess, setPastGuess] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    // useEffect to check if the game is over after each render cycle
        // Runs when currentGuess, userChoice, or onGameOver changes.
    if (currentGuess === userChoice) {
      onGameOver(pastGuess.length); //number of rounds
      // onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]); //only with this values (currentGuess, userChoice, onGameOver) change then useEffect will run

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Dont lie!", "you that this wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNum = generateRandomNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    // setRounds((curRounde) => curRounde + 1);
    setPastGuess((curPastGuesses) => [nextNum.toString(), ...curPastGuesses]);
  };
  return (
    <View style={styles.screen}>
      <Text>Computer Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttoncont}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="ios-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listcont}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuess.map((guess, index) =>
            renderListItems(guess, pastGuess.length - index)
          )}
        // </ScrollView> */}
        {/* <ScrollView> : never be alist with more than 100 items so we will use <FlatList> insted of <ScrollView>   */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuess}
          renderItem={renderListItems.bind(this, pastGuess.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};//FlatList to render a scrollable list of past guesses.

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttoncont: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
  listcont: {
    flex: 1, //to make scrollview work
    width: "60%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

//flex: 1:  take all avialble space in all directions
//flexGrow:1 :
export default GameScreen;
