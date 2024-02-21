import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "../components/Header";

export const Error = () => {
  return (
    <View style={styles.root}>
      <Header title={"Batman Movies"} />

      <View style={styles.container}>
        <Text style={styles.messageText}>
          There's an error loading Batman movies!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    minHeight: "100vh",
    width: "100%",
    flex: 1,
    backgroundColor: "#0B0C0F",
  },
  container: {
    height: "auto",
    width: "100%",
    padding: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    color: "#F1F5F9",
    fontSize: 16,
    fontWeight: 200,
    marginTop: 2,
    flexGrow: 1,
    textAlign: "center",
  },
});
