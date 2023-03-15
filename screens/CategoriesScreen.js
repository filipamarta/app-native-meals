import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, View, FlatList } from "react-native";
import Category from "../components/ui/Category";

const CategoriesScreen = ({ navigation: { navigate } }) => {
  const onPressHandler = ({ color, id, title }) => {
    navigate("MealsOverview", {
      categoryId: id,
      categoryColor: color,
      categoryTitle: title,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={(itemData) => (
          <Category
            color={itemData.item.color}
            title={itemData.item.title}
            onPress={() => onPressHandler(itemData.item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {},
});
