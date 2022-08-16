//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { wp } from "../../helper/constants";
import { colors, fontSize } from "../../helper/utils";
import { hp, statusBarHeight } from "../../helper/constants";

// create a component
const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: statusBarHeight + hp(1),
    paddingBottom: hp(2),
    borderBottomLeftRadius: wp(6),
    borderBottomRightRadius: wp(6),
  },
  headerText: {
    fontSize: fontSize(18),
    color: colors.white,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default Header;
