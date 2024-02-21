import React from "react";
import { View, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "../styles/App.scss";

export const Search = ({ value, onChangeText }) => {
  return (
    <View style={styles.search}>
      <View style={styles.searchBar}>
        <MagnifyingGlassIcon style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
