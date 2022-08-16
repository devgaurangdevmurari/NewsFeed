import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { icons } from "../helper/iconConstants";
import { hp, tabBarHeight, wp } from "../helper/constants";
import { colors, fontFamily, fontSize } from "../helper/utils";

import Home from "../screens/Home/Home";
import Settings from "../screens/Settings/Settings";
import { getText } from "../helper/globalFunction";

//---- Tab Stack

const TabNavigation = () => {
  //
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: style.mainContainer,
        activeTintColor: colors.white,
        inactiveTintColor: colors.grey,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ color }) => {
            return (
              <Text style={[style.tabBarLabelText, { color: color }]}>
                {getText("news")}
              </Text>
            );
          },
          tabBarIcon: ({ color }) => {
            return (
              <View style={[style.tabBarContainer]}>
                <Image
                  source={icons.home}
                  resizeMode={"contain"}
                  style={[style.iconStyle, { tintColor: color }]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ color }) => {
            return (
              <Text style={[style.tabBarLabelText, { color: color }]}>
                {getText("settings")}
              </Text>
            );
          },
          tabBarIcon: ({ color }) => {
            return (
              <View style={[style.tabBarContainer]}>
                <Image
                  source={icons.settings}
                  resizeMode={"contain"}
                  style={[style.iconStyle, { tintColor: color }]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    paddingBottom: 0,
    height: tabBarHeight,
    position: "absolute",
    // borderTopRightRadius: wp(6),
    // borderTopLeftRadius: wp(6),
    backgroundColor: colors.primary,
  },
  tabBarContainer: {
    padding: wp(2),
    borderRadius: wp(5.5),
    borderColor: colors.primary,
    marginTop: hp(1),
  },
  tabBarLabelText: {
    fontSize: fontSize(14),
    color: colors.black,
    paddingBottom: hp(3),
    fontFamily: fontFamily.aBeeZeeItalic,
  },
  iconStyle: {
    height: wp(6),
    width: wp(6),
  },
});
export default TabNavigation;
