import React, { useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID]);

  



  const renderMealItem = (itemData) => {
    return <MealItem itemData={itemData} />;
  };
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
