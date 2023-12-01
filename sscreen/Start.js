import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
// import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const Start = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [Confirmed, setConfirmed] = useState(false);
  const [numberSelected, setnumberSelected] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const restInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const comfirmHandler = () => {
    const num = parseInt(enteredValue);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid input!", "Number must between 0 and 99", [
        { text: "ok", style: "destructive", onPress: restInput },
      ]);
      return;
    }
    setConfirmed(true);
    setnumberSelected(num);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmoutput;
  if (Confirmed) {
    confirmoutput = 
    <Card style={styles.samarycont}>
      <Text>You selected </Text>
      <NumberContainer>{numberSelected}</NumberContainer>
      {/* <Button title="start game" onPress={()=> props.onStartGame(numberSelected)} /> */}
      <MainButton onPress={()=> props.onStartGame(numberSelected)}>
      start game
      </MainButton>
    </Card>;
    //onPress={()=> props.onStartGame(numberSelected)}:  forward numberSelected to App.js on <Start onStartGame={startGameHandler} /> then call startGameHandler
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); //to close keyboard when click in any place in screen
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Games Started</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.text}>Select a Number</Text>
          {/* <BodyText>Select a Number</BodyText> */}
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad" 
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue} 
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Rest" color={colors.accent} onPress={restInput} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={comfirmHandler}
              />
            </View>
          </View>
        </Card>
        {confirmoutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    // fontFamily:"open-sans"
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    textAlign: "center",
    width: 100,
  },
  samarycont:{
    marginTop:20,
    alignItems:"center"
  },
  text:{

  }
});

export default Start;
