import React from "react";
import { View, Image } from "react-native";
import styles from "../styles/App.scss";

export const Img = ({ src }) => {
  return (
    <View style={styles.imageWrapper}>
      <View style={styles.imageOverlay}>
        <Image
          style={styles.imageBase}
          source={src}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </View>
  );
};
