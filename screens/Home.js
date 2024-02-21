import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Error } from "./Error";
import styles from "../styles/App.scss";

export const Home = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialPost, setInitialPost] = useState(6);
  const [hoverBtn, setHoverBtn] = useState(false);

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
        <View style={styles.homeContainer}>
          <Search
            value={query}
            onChangeText={(prevText) => setQuery(prevText)}
          />

          <View style={styles.homeContent}>
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
                      <View style={styles.loadMore}>
                        <Pressable
                          style={[
                            styles.loadMoreBtn,
                            hoverBtn ? styles.hoveredLoadMoreBtn : "",
                          ]}
                          onHoverIn={() => setHoverBtn(true)}
                          onHoverOut={() => setHoverBtn(false)}
                          onPress={() => setInitialPost(initialPost + 5)}
                        >
                          <Text style={styles.loadMoreText}>Load More</Text>
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
