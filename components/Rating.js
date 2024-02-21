import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/App.scss";

export const Rating = ({ source, value }) => {
  // split the string that has / and %
  const splitValue = value.split(/[/|%]/);
  const getFirstValue = splitValue[0];

  const newValue = () => {
    if (source === "Internet Movie Database") {
      const sourceValue = getFirstValue * 10;
      return `${sourceValue}%`;
    }
    return `${getFirstValue}%`;
  };

  return (
    <View style={styles.ratingWrapper}>
      <View style={styles.ratingContent}>
        <Text style={styles.ratingSource}>{source}</Text>
        <Text style={styles.ratingValue}>{value}</Text>
      </View>
      <View style={styles.ratingValueTrack}>
        <View
          style={{
            ...styles.ratingValueThumb,
            width: newValue(),
          }}
        />
      </View>
    </View>
  );
};
