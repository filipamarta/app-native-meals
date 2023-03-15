import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useFavourites } from "../store/context/FavouritesContext";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  // const { favouritesList } = useFavourites();
  const [mealsList, setMealsList] = useState([]);

  const favouritesList = useSelector((state) => state.favouritesMeals.ids);

  useEffect(() => {
    const list = MEALS.filter((meal) => {
      return favouritesList.includes(meal.id);
    });
    setMealsList(list);
  }, [favouritesList]);

  return favouritesList.length ? (
    <View style={styles.container}>
      <FlatList
        data={mealsList}
        renderItem={(itemData) => <MealItem {...itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  ) : (
    <View>
      <Text>No favourites</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
