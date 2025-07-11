import React from "react";
import { StyleSheet, View ,Dimensions} from "react-native";
import Colors from "../../constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop:  deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    // flex: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowColor: "black",
  },
});
