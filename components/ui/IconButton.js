import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, iconName, color, iconSize }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
      >
        <View>
          <Ionicons
            name={iconName}
            size={iconSize}
            color={color ?? "#34015c"}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonPressed: { opacity: 0.5 },
  button: {
    backgroundColor: "#34015c",
    borderRadius: 100,
    width: 30,
    height: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
