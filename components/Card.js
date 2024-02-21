import React from "react";
import { View, Text, Pressable } from "react-native";
import { Img } from "./Img";
import styles from "../styles/App.scss";

export const Card = (props) => {
  return (
    <View style={styles.cardWrapper}>
      <Pressable style={styles.cardTouchable} onPress={props.onPress}>
        <View style={styles.cardBase}>
          <Img src={props.Poster} />
          <Text style={styles.cardTitle}>{props.Title}</Text>
          <Text style={styles.cardYear}>{props.Year}</Text>
        </View>
      </Pressable>
    </View>
  );
};
