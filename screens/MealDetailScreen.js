import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/meal-detail/SubTitle";
import List from "../components/meal-detail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../context/favorite-context";
const MealDetailScreen = ({ route, navigation }) => {
  const mealID = route.params.mealID;

  const { favoriteMealIDs, addFavorites, removeFavorite } =
    useContext(FavoritesContext);

  const meal = MEALS.find((meal) => meal.id === mealID);
  
  const mealIsFav = favoriteMealIDs.includes(mealID);

  const changeFavorteStatusHandler = () => {

    console.log('hey')
    if(mealIsFav){
      removeFavorite(mealID);
    }else{
      addFavorites(mealID);
    }
    
   
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="white"
            onPressHandler={changeFavorteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavorteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>

 
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="black"
            onPressHandler={changeFavorteStatusHandler}
          />
      <View>
        <MealDetails
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
        />
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={meal.ingredients} />
          {/* <List></List> */}

          <SubTitle>Steps</SubTitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    margin: 8,
  },
  listContainer: {
    padding: 16,
    width: "80%",
  },
  listOuterContainer: {
    flex: 1,
    alignItems: "center",
  },
});
