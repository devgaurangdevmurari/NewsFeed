//import liraries
import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

import { Header } from "../../components";
import { colors } from "../../helper/utils";
import { hp, wp } from "../../helper/constants";
import { fontSize } from "../../helper/utils";
import { useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setChangeTheme } from "../../actions/dataAction";
import { getText } from "../../helper/globalFunction";
import I18n from "react-native-i18n";
import AsyncStorage from "@react-native-community/async-storage";
import { useEffect } from "react";

// create a component
const Settings = () => {
  const dispatch = useDispatch();

  const { colors } = useTheme();
  const style = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

  const [languageSwitch, setLanguageSwitch] = useState(false);
  const [themeSwitch, setThemeSwitch] = useState(false);

  useEffect(() => {
    const getCurrentLanguage = async () => {
      const currentLang = await AsyncStorage.getItem("currentLang");
      I18n.locale = JSON.parse(currentLang) || "en";
      setLanguageSwitch(JSON.parse(currentLang) == "en" ? false : true);

      const currentTheme = await AsyncStorage.getItem("currentTheme");
      setThemeSwitch(JSON.parse(currentTheme));
    };
    getCurrentLanguage();
  }, []);

  const onChangeTheme = () => {
    AsyncStorage.setItem("currentTheme", JSON.stringify(!themeSwitch));
    setThemeSwitch(!themeSwitch);
    dispatch(setChangeTheme(!themeSwitch));
  };

  const onChangeLanguage = () => {
    let currentState = languageSwitch ? "en" : "france";
    I18n.locale = languageSwitch ? "en" : "france";
    AsyncStorage.setItem("currentLang", JSON.stringify(currentState));
    setLanguageSwitch(!languageSwitch);
  };

  console.log("getText", getText("welCome_to_fitX"));

  return (
    <View style={style.container}>
      <Header title={getText("settings")} />
      <View style={{ margin: wp(4) }}>
        <View style={style.contentContainer}>
          <Text style={style.contentText}>{getText("language")}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={style.indiaFlag}>{"🇮🇳"}</Text>
            <Switch value={languageSwitch} onValueChange={onChangeLanguage} />
            <Text style={style.usaFlag}>{"🇫🇷"}</Text>
          </View>
        </View>
        <View style={style.contentContainer}>
          <Text style={style.contentText}>{getText("theme")}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Switch value={themeSwitch} onValueChange={onChangeTheme} />
            <Text style={style.usaFlag}>{"\t"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const getGlobalStyles = (props) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.colors.white,
    },
    contentText: {
      fontWeight: "600",
      color: props.colors.black,
      fontSize: fontSize(18),
    },
    indiaFlag: {
      fontSize: fontSize(30),
      right: wp(2),
    },
    usaFlag: {
      fontSize: fontSize(30),
      left: wp(2),
    },
    contentContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: hp(2),
    },
  });

//make this component available to the app
export default Settings;
