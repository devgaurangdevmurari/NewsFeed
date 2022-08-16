import { RFValue } from "react-native-responsive-fontsize";

export const colors = {
  white: "#fff",
  black: "#000",
  primary: "#2c3e50",
  grey: "#808080",
};

export const lightThemeColor = {
  white: "#000",
  black: "#fff",
  primary: "#808080",
  grey: "#2c3e50",
};

export const fontFamily = {};

export const fontSize = (val) => RFValue(val, 812);
