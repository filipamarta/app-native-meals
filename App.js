import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import {
  useFonts,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_500Medium,
} from "@expo-google-fonts/playfair-display";
import {
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/FavouritesContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#34015c" },
        sceneContainerStyle: { backgroundColor: "#5e1695" },
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Poppins_600SemiBold",
          fontSize: 16,
        },
        animation: "slide_from_right",
        drawerContentStyle: { backgroundColor: "#82c4ff" },
        drawerInactiveTintColor: "#34015c",
        drawerActiveTintColor: "#82c4ff",
        drawerActiveBackgroundColor: "#34015c",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Hungry for?",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-sharp" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    PlayfairDisplay_500Medium,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <FavouritesContextProvider>
          <NavigationContainer onLayout={onLayoutRootView}>
            <Stack.Navigator
              screenOptions={{
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#34015c" },
                contentStyle: { backgroundColor: "#5e1695" },
                headerBackTitleVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 16,
                },
                animation: "slide_from_right",
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigation}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="MealsOverview" component={MealsScreen} />
              <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavouritesContextProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
