import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <SvgUri
          uri="https://cdn.cdnlogo.com/logos/i/91/instagram.svg"
          fill={"white"}
          width={100}
          height={50}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    borderRadius: 25,
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
  icon: { width: 30, height: 30, marginLeft: 10, resizeMode: "contain" },
  iconsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
});

export default Header;
