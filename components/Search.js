import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "../styles/App.scss";

export const Search = ({ value, onChangeText }) => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.search}>
      <View style={styles.searchBar}>
        <MagnifyingGlassIcon
          style={styles.searchIcon}
          color={focus ? "ghostwhite" : "slategray"}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
