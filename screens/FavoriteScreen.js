import React, { useContext } from "react";
import { View, Text,StyleSheet } from "react-native";
import { FavoritesContext } from "../context/favorite-context";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const { favoriteMealIDs } = useContext(FavoritesContext);

  console.log(favoriteMealIDs);

  const displayedMeals = MEALS?.filter((mealItem) =>
    favoriteMealIDs.includes(mealItem.id)
  );

  return (
    <View >
        <View style={styles.rootContainer}>
     
      {displayedMeals.length === 0 && (
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      )}
      {displayedMeals.length > 0 && (
        <MealList displayedMeals={displayedMeals} />
      )}
      
             
        </View>
    </View>
  );
};

export default FavoriteScreen;


const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        // color:'white',
        fontSize:18,
        textAlign:'center',
        fontFamily:"open-sans",
        fontWeight:'bold'
    }
});