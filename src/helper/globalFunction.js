import I18n from "../i18n";

import { User_Token } from "./constData";
import AsyncStorage from "@react-native-community/async-storage";

export const getAuthToken = async () => {
  const userData = await AsyncStorage.getItem(User_Token);
  if (userData) {
    const userInfo = JSON.parse(userData);
    return `${userInfo || ""}`;
  }
  return null;
};

export const getText = (text) => {
  return I18n.t(text);
};
