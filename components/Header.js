import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import colors from "../constants/colors";

const Header = props => {

  return (
    <View style={styles.header}>
      <Text style={styles.titleheader}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "90",
    paddingTop: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  titleheader: {
    color: "white",
    fontSize: 25,
  },
});

export default Header;
