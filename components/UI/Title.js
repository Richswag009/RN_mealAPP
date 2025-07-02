
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children} </Text>;
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color:'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    fontFamily: "open-sans-bold",
    padding: 12,
    maxWidth:'80%',
    width:300
  },
});
