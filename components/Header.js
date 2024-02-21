import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export const Header = ({ title = "", back = false, onBackPrevPage }) => {
  return (
    <View style={styles.header}>
      {back && (
        <Pressable onPress={onBackPrevPage}>
          <ChevronLeftIcon style={styles.icon} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#1A1A1A",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    width: 24,
    color: "#F1F5F980",
  },
  title: {
    flex: 1,
    fontSize: 24,
    letterSpacing: 2,
    color: "#F1F5F9",
    fontFamily: "fantasy",
    textAlign: "center",
  },
});
