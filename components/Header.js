import React from "react";
import { View, Text, Pressable } from "react-native";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import styles from "../styles/App.scss";

export const Header = ({ title = "", back = false, onBackPrevPage }) => {
  return (
    <View style={styles.header}>
      {back && (
        <Pressable onPress={onBackPrevPage}>
          <ChevronLeftIcon style={styles.headerBackIcon} />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
