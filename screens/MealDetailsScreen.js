import React, { /* useContext, */ useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import IconButton from "../components/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, deleteFavourite } from "../store/redux/favourites";
/* import { useFavourites } from "../store/context/FavouritesContext"; */

const MealDetailsScreen = ({
  navigation,
  route: {
    params: {
      id,
      title,
      imageUrl,
      duration,
      ingredients,
      steps,
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
      categoryColor,
    },
  },
}) => {
  /* const { addFavourite, deleteFavourite, checkFavouriteOnTheList } =
    useFavourites(); */

  const favouriteMealIds = useSelector((state) => state.favouritesMeals.ids);
  const dispatch = useDispatch();

  // const isOnTheList = checkFavouriteOnTheList(id);
  const isOnTheList = favouriteMealIds.includes(id);

  const favouritesHandler = () => {
    // return !isOnTheList ? addFavourite(id) : deleteFavourite(id);
    return !isOnTheList
      ? dispatch(addFavourite({ id }))
      : dispatch(deleteFavourite({ id }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerTintColor: "#34015c",
      headerStyle: { backgroundColor: categoryColor },
      contentStyle: { backgroundColor: categoryColor },
      headerRight: () => {
        return (
          <IconButton
            id={id}
            onPress={favouritesHandler}
            color="white"
            iconName={isOnTheList ? "heart-sharp" : "heart-outline"}
            iconSize={20}
          />
        );
      },
    });
  }, [navigation, favouritesHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <ScrollView>
        <View
          style={[styles.contentContainer, { backgroundColor: categoryColor }]}
        >
          <View style={styles.durationContainer}>
            <Feather name="clock" size={32} color="white" />
            <Text style={styles.durationText}>{`${duration}'`}</Text>
          </View>
          {(isGlutenFree || isVegan || isVegetarian || isLactoseFree) && (
            <View style={styles.settingsContainer}>
              {isGlutenFree && <Text style={styles.setting}>Gluten Free</Text>}
              {isVegan && <Text style={styles.setting}>Vegan</Text>}
              {isVegetarian && <Text style={styles.setting}>Vegetarian</Text>}
              {isLactoseFree && (
                <Text style={styles.setting}>Lactose Free</Text>
              )}
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.subtitle}>Ingredients</Text>
            <View>
              {ingredients.map((ingredient) => (
                <Text key={ingredient} style={styles.text}>
                  {ingredient}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Steps</Text>
            <View>
              {steps.map((step) => (
                <Text key={step} style={styles.text}>
                  {step}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 4,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  durationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 26,
    marginTop: 20,
  },
  durationText: {
    fontSize: 34,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 8,
  },
  settingsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  setting: {
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
  },
  section: {
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "PlayfairDisplay_700Bold",
    marginBottom: 10,
    color: "#5e1695",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#34015c",
    marginBottom: 4,
  },
});
