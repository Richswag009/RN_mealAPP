import React from "react";
import { StyleSheet } from "react-native";
import { View, FlatList, Text } from "react-native";
import Colors from "../../constants/Colors";

const GuessLogItem = ({ itemData,roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent Guess : {itemData.item}</Text>
    </View>
  );
};

export default GuessLogItem;


const styles = StyleSheet.create({

listItem:{
    borderColor: Colors.primary800,
    borderWidth: 1,
    padding: 15,
    borderRadius: 40,
    marginVertical: 8,
    padding:12,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    width: "100%",
    elevation:4,
    shadowColor:"black",
    shadowOffset:{width:0,height:0},
    shadowRadius:3,
    shadowOpacity:0.25
},
itemText:{
    fontFamily: "open-sans",
}
});