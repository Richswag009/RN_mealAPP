import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import MealItem from "./MealItem";
const MealList = ({ displayedMeals }) => {
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

export default MealList;



const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});