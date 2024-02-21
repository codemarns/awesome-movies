import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "../components/Header";
import { Error } from "./Error";
import { Img } from "../components/Img";
import styles from "../styles/App.scss";

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
        <View style={styles.detailsContainer}>
          {loading ? (
            <Text style={styles.messageText}>Loading...</Text>
          ) : (
            <>
              <Img src={movie.Poster} />
              <View style={styles.detailsYearAndDirector}>
                <Text style={styles.detailsText}>Year: {movie.Year}</Text>
                <Text style={styles.detailsDirector}>
                  Director: {movie.Director}
                </Text>
              </View>
              <Text style={styles.detailsText}>{movie.Plot}</Text>
            </>
          )}
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};
