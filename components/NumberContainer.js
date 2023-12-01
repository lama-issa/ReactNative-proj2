import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
  //{props.children} == numberSelected
};
const styles = StyleSheet.create({
  cont: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number:{
    color:colors.accent,
    fontSize:20,

  }
});
export default NumberContainer;
