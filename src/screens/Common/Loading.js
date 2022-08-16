//import liraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import I18n from "react-native-i18n";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { colors } from "../../helper/utils";
import { setChangeTheme } from "../../actions/dataAction";

// create a component
const Loading = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentLanguage = async () => {
      const currentLang = await AsyncStorage.getItem("currentLang");
      console.log("currentLang", currentLang);
      I18n.locale = JSON.parse(currentLang) || "en";
      const currentTheme = await AsyncStorage.getItem("currentTheme");
      dispatch(setChangeTheme(JSON.parse(currentTheme)));
    };
    getCurrentLanguage();
    navigate("TabNavigation");
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});

//make this component available to the app
export default Loading;
