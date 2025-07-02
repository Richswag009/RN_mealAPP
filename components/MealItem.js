import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  Image,
} from "react-native";
import MealDetails from "./MealDetails";
const MealItem = ({ itemData }) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("MealDetail", { mealID: itemData.item.id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={onPressHandler} android_ripple={{ color: "#ccc" }}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: itemData.item.imageUrl }}
          />
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
        <MealDetails
          duration={itemData.item.duration}
          affordability={itemData.item.affordability}
          complexity={itemData.item.complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    fontFamily: "open-sans-bold",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    justifyContent: "center",
    fontFamily: "open-sans-bold",

    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
