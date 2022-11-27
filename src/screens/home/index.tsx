import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import Post from "../../components/post";
import Stories from "../../components/stories";
import Header from "../../layout/header";
import { POSTS } from "../../mocks/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Header />
        <Stories />
        <Divider width={1} orientation="vertical" />
        {POSTS.map((post, index) => (
          <Post key={`post-${index}`} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
