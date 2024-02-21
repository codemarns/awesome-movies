import React from "react";
import { View, Text } from "react-native";
import { Header } from "../components/Header";
import styles from "../styles/App.scss";

export const Error = () => {
  return (
    <View style={styles.root}>
      <Header title={"Batman Movies"} />

      <View style={styles.errorContainer}>
        <Text style={styles.messageText}>
          There's an error loading Batman movies!
        </Text>
      </View>
    </View>
  );
};
