import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = (props) => {
  const { title, affordability, complexity, imageUrl, duration } = props;
  const { navigate } = useNavigation();

  const onSelectMealHandler = () => {
    navigate("MealDetails", {
      ...props,
    });
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onSelectMealHandler}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: imageUrl }}
            resizeMethod="auto"
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>{duration}'</Text>
          <Text style={styles.detailItem}>{complexity}</Text>
          <Text style={styles.detailItem}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 20,
    marginHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  innerContainer: { paddingBottom: 14 },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: "PlayfairDisplay_700Bold",
    textAlign: "center",
    color: "#5e1695",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
  },
  detailItem: {
    margin: 4,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#34015c",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
