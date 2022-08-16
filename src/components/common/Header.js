//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { wp } from "../../helper/constants";
import { colors, fontSize } from "../../helper/utils";
import { hp, statusBarHeight } from "../../helper/constants";
import { icons } from "../../helper/iconConstants";
import { useNavigation } from "@react-navigation/native";

// create a component
const Header = ({ title, isBack }) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {isBack && (
          <TouchableOpacity onPress={() => goBack()}>
            <Image
              source={icons.back}
              style={styles.backIcon}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: statusBarHeight + hp(1),
    paddingBottom: hp(2),
    flexDirection: "row",
    paddingHorizontal: wp(2),
    // borderBottomLeftRadius: wp(6),
    // borderBottomRightRadius: wp(6),
  },
  headerText: {
    fontSize: fontSize(18),
    color: colors.white,
    fontWeight: "bold",
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
    tintColor: colors.white,
  },
  emptyView: {
    width: wp(6),
    height: wp(6),
  },
});

//make this component available to the app
export default Header;
