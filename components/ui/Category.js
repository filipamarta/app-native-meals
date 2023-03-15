import React from "react";
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const Category = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "cccccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  categoryTitle: {
    color: "#34015c",
    fontSize: 20,
    fontFamily: "PlayfairDisplay_700Bold",
  },
});
