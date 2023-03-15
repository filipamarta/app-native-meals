import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsScreen = ({
  navigation,
  route: {
    params: { categoryId },
  },
}) => {
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) !== -1;
  });

  const currentCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: currentCategory.title,
      headerTintColor: currentCategory.color,
    });
  }, [categoryId, navigation]);

  return (
    <View
      style={[styles.container, { backgroundColor: currentCategory.color }]}
    >
      <FlatList
        data={displayedMeals}
        renderItem={(itemData) => (
          <MealItem
            categoryTitle={currentCategory.title}
            categoryColor={currentCategory.color}
            {...itemData.item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
