import {
  GET_ARTICLES_DATA,
  SET_CHANGE_LANGUAGE,
  SET_CHANGE_THEME,
} from "./types";
import { api, GET, NewsAPIKEY, POST } from "../helper/apiConstants";
import { makeAPIRequest } from "../helper/Global";
import moment from "moment";

export const setChangeTheme = (request) => (dispatch) => {
  dispatch({ type: SET_CHANGE_THEME, payload: request });
};

export const setChangeLanguage = (request) => (dispatch) => {
  dispatch({ type: SET_CHANGE_LANGUAGE, payload: request });
};

export const getNewsDataAPI = (request) => async (dispatch) => {
  console.log("request", request);
  makeAPIRequest({
    method: GET,
    baseURL: api.newsData,
    params: {
      q: request?.data?.text || "",
      from: moment(new Date()).format("YYYY-MM-DD"),
      sortBy: "publishedAt",
      apiKey: NewsAPIKEY,
    },
  })
    .then((response) => {
      console.log("response", response);
      dispatch({ type: GET_ARTICLES_DATA, payload: response?.data });

      if (request?.onSuccess) request?.onSuccess(response);
    })
    .catch((error) => {
      console.log("error", error);
      if (request.onFail) request.onFail(error);
    });
};
