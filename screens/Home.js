import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Error } from "./Error";

export const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialPost, setInitialPost] = useState(6);

  const data = Object.values(movies);

  function search(movies) {
    const filteredMovies = movies.filter((movie) => {
      const movieData = movie.Title.toString().toLowerCase();
      const queryData = query.toLowerCase();
      return movieData.indexOf(queryData) > -1;
    });
    return filteredMovies;
  }

  const getBatmanMovies = () => {
    fetch("https://www.omdbapi.com/?s=batman&apikey=725015d8")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () =>
      getBatmanMovies()
    );
    return unsubscribe;
  }, [navigation]);

  const initialPosts = slice(search(data), 0, initialPost);

  if (error) return <Error />;

  return (
    <View style={styles.root}>
      <Header title={"Batman Movies"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <Search
            value={query}
            onChangeText={(prevText) => setQuery(prevText)}
          />

          <View style={styles.content}>
            {loading ? (
              <Text style={styles.messageText}>Loading...</Text>
            ) : (
              <>
                {initialPosts.length === 0 ? (
                  <Text style={styles.messageText}>No movies found.</Text>
                ) : (
                  <>
                    {initialPosts.map((movie, index) => (
                      <Card
                        key={index}
                        {...movie}
                        onPress={() =>
                          navigation.navigate("Details", {
                            movieID: movie.imdbID,
                          })
                        }
                      />
                    ))}

                    {initialPost >= search(data).length ? null : (
                      <View style={styles.cta}>
                        <Pressable
                          style={styles.ctaBtn}
                          onPress={() => setInitialPost(initialPost + 5)}
                        >
                          <Text style={styles.ctaText}>Load More</Text>
                        </Pressable>
                      </View>
                    )}
                  </>
                )}
              </>
            )}
          </View>
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
    height: "100%",
    width: "100%",
    padding: 12,
    display: "flex",
  },
  content: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  messageText: {
    color: "#F1F5F9",
    fontSize: 16,
    fontWeight: 200,
    marginTop: 2,
    flexGrow: 1,
    textAlign: "center",
  },
  cta: {
    width: "100%",
    padding: 12,
  },
  ctaBtn: {
    height: 40,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
  },
  ctaText: {
    color: "#F1F5F9",
  },
});
