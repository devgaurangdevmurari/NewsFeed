import {
  GET_ARTICLES_DATA,
  GET_DATALIST,
  SET_CHANGE_LANGUAGE,
  SET_CHANGE_THEME,
} from "../actions/types";

const INITIAL_STATE = {
  dataList: [],
  isChangeTheme: false,
  language: "",
  articlesData: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATALIST:
      return { ...state, dataList: action.payload };
    case SET_CHANGE_THEME:
      return { ...state, isChangeTheme: action.payload };
    case SET_CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case GET_ARTICLES_DATA:
      return { ...state, articlesData: action.payload };
    default:
      return state;
  }
};
