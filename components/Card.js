import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Img } from "./Img";

export const Card = (props) => {
  return (
    <View style={styles.root}>
      <Pressable style={styles.touchable} onPress={props.onPress}>
        <View style={styles.card}>
          <Img src={props.Poster} />
          <Text style={styles.cardTitle}>{props.Title}</Text>
          <Text style={styles.cardYear}>{props.Year}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    maxWidth: "50%",
    padding: 12,
  },
  touchable: {
    width: "100%",
  },
  card: {
    width: "100%",
  },
  cardTitle: {
    color: "#F1F5F9",
    fontSize: 16,
    fontFamily: "fantasy",
    fontWeight: 400,
    letterSpacing: 1,
    marginTop: 7,
  },
  cardYear: {
    color: "#F1F5F9",
    fontSize: 16,
    fontWeight: 200,
    marginTop: 2,
  },
});
