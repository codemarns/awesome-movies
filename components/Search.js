import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const Search = ({ value, onChangeText }) => {
  return (
    <View style={styles.root}>
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

const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 12,
  },
  searchBar: {
    flex: 1,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    left: 16,
    width: 24,
    color: "#F1F5F980",
  },
  searchInput: {
    height: 40,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 2,
    paddingLeft: 48,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#1A1A1A",
    borderRadius: 20,
    color: "#F1F5F980",
    fontSize: 16,
    fontWeight: 200,
  },
});
