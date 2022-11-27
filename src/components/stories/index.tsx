import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { USERS } from "../../mocks/users";

const Stories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {USERS.map((storie, index) => (
          <View
            key={`storie-${storie}-${index}`}
            style={{ alignItems: "center" }}
          >
            <Image source={{ uri: storie.image }} style={styles.storyImage} />
            <Text style={styles.storyText}>
              {storie.user.length > 8
                ? storie.user.slice(0, 8) + "..."
                : storie.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#FF8501",
  },
  storyText: {
    color: "white",
  },
});

export default Stories;
