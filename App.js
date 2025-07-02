import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";

import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/Colors";
import AppLoading from "expo-app-loading";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNaviagtor = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351041",
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#fff",
          },
          drawerContentStyle: {
            backgroundColor: "#351041",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor:"#e4d0ff"
        }}
      >
        <Drawer.Screen
          options={{
            headerTitle: "Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            )
          }}
          name="categories"
          component={CategoryScreen}
        />
        <Drawer.Screen
          options={{
            headerTitle: "Favorites",
              drawerIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            )
          }}
          name="Favorites"
          component={FavoriteScreen}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <>
      <StatusBar style="light" />{" "}
      {/* <LinearGradient
        colors={[Colors.primary500, "#ddb52f"]}
        style={styles.appContainer}
      > */}
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351041",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#fff",
              },

              // headerShown: false,
            }}
          >
            <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DrawerNaviagtor} />
            <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
      {/* </LinearGradient> */}
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
