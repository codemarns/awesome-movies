import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";
import { Error } from "./Error";
import { Img } from "../components/Img";

export const Details = ({ route, navigation }) => {
  const { movieID } = route.params;

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBatmanMovie = () => {
    fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=725015d8`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => getBatmanMovie());
    return unsubscribe;
  }, [navigation]);

  if (error) return <Error />;

  return (
    <View style={styles.root}>
      <Header
        back={true}
        title={movie.Title}
        onBackPrevPage={() => navigation.navigate("Home")}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          {loading ? (
            <Text style={styles.messageText}>Loading...</Text>
          ) : (
            <>
              <Img src={movie.Poster} />
              <View style={styles.yearAndDirector}>
                <Text style={styles.text}>Year: {movie.Year}</Text>
                <Text style={[styles.text, styles.director]}>
                  Director: {movie.Director}
                </Text>
              </View>
              <Text style={styles.text}>{movie.Plot}</Text>
            </>
          )}
        </View>
      </ScrollView>

      <StatusBar style="auto" />
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
    flexDirection: "column",
    gap: 8,
  },
  messageText: {
    color: "#F1F5F9",
    fontSize: 16,
    fontWeight: 200,
    marginTop: 2,
    flexGrow: 1,
    textAlign: "center",
  },
  yearAndDirector: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#F1F5F9",
    fontSize: 16,
    fontWeight: 200,
    marginTop: 2,
    flexGrow: 1,
  },
  director: {
    textAlign: "right",
  },
});
