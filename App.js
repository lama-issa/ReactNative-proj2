import { StyleSheet, View,Text } from "react-native";
import { useState } from "react";
// import { AppLoading } from "expo";
// import * as Font from "expo-font";
import Header from "./components/Header.js";
import Start from "./sscreen/Start";
import GameScreen from "./sscreen/GameScreen";
import GameOver from "./sscreen/GameOver";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./asgit initsets/fonts/OpenSans-Bold.ttf"),
//   });
// };

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)} //when fonts falid
  //     />
  //   );
  // }

  const configerNewGameHandler = () => {
    // to restart the game and display Start.js (first page ) when click on New Game button from GameOver.js
    setGuessRounds(0); // to rest game when start game
    setUserNumber(null);
  };

  const startGameHandler = (selectedNum) => {
    // selectedNum from start.js
    setUserNumber(selectedNum);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <Start onStartGame={startGameHandler} />;



  if (userNumber && guessRounds <= 0) {
    //number selected by user (user clicked on start game button after enter num in input field)
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        userNum={userNumber}
        roundsNum={guessRounds}
        onRestart={configerNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guss a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// State changes trigger re-render:

// When the state changes (due to the calls to setGuessRounds and setUserNumber), the App component re-renders.

// any code you place before the return statement will run each time the component is rendered, and the result of that code is then used to determine what JSX should be returned and rendered on the screen.