import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//--- Common
import Loading from "../screens/Common/Loading";
import { navigationRef } from "./rootNavigation";

import TabNavigation from "./TabNavigation";
import { colors, lightThemeColor } from "../helper/utils";
import { useSelector } from "react-redux";
import AticlesDetails from "../screens/Home/AticlesDetails";

//---- Main Stack
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const DarkTheme = {
    colors: {
      ...colors,
    },
  };

  const lightTheme = {
    colors: {
      ...lightThemeColor,
    },
  };

  const { isChangeTheme } = useSelector((state) => state.data);

  return (
    <NavigationContainer
      theme={!isChangeTheme ? DarkTheme : lightTheme}
      ref={navigationRef}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Loading"} component={Loading} />
        <Stack.Screen name={"TabNavigation"} component={TabNavigation} />
        <Stack.Screen name={"AticlesDetails"} component={AticlesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
