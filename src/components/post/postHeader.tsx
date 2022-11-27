import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { User } from "../../mocks/users";

export const PostHeader = ({ user }: { user: User }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.text}>{user.user}</Text>
    </View>
    <TouchableOpacity>
      <Text style={styles.buttonText}>...</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#FF8501",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "700",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "900",
  },
});
