import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const Img = ({ src }) => {
  return (
    <View style={styles.imageWrapper}>
      <View style={styles.imageOverlay}>
        <Image
          style={styles.image}
          source={src}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    height: "auto",
    width: "100%",
    paddingTop: "150%",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
