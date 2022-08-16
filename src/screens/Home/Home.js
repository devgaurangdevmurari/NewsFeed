//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import I18n from "react-native-i18n";
import { useTheme, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { Header } from "../../components";
import { hp, wp } from "../../helper/constants";
import { getText } from "../../helper/globalFunction";
import { fontSize } from "../../helper/utils";
import { homeCategoriesData } from "../../helper/dataConstants";
import { getNewsDataAPI } from "../../actions/dataAction";
import { useNavigation } from "@react-navigation/native";

// create a component
const Home = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const style = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

  const [categoriesData, setCategoriesData] = useState(homeCategoriesData);
  const { articlesData } = useSelector((state) => state.data);

  console.log("articlesData", articlesData);

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      const getCurrentLanguage = async () => {
        const currentLang = await AsyncStorage.getItem("currentLang");
        console.log("currentLang", currentLang);
        I18n.locale = JSON.parse(currentLang) || "en";
      };
      getCurrentLanguage();
    }
  }, [isFocus]);

  useEffect(() => {
    getNewsData("All");
  }, []);

  const getNewsData = (concept) => {
    const request = {
      data: {
        text: concept,
      },
      onSuccess: () => {},
      onFail: () => {},
    };
    dispatch(getNewsDataAPI(request));
  };

  const categoriesRenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          const getData = categoriesData?.map((catData) => {
            return {
              ...catData,
              isSelected: catData?.id == item?.id ? true : false,
            };
          });
          setCategoriesData(getData);
          getNewsData(item?.title);
        }}
        style={[
          style.categoriesData,
          {
            backgroundColor: item?.isSelected ? colors.primary : colors.white,
          },
        ]}
      >
        <Text
          style={[
            style.categoriesText,
            {
              color: item?.isSelected ? colors.white : colors.black,
            },
          ]}
        >
          {item?.title || ""}
        </Text>
      </TouchableOpacity>
    );
  };

  const articlesRenderData = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate("AticlesDetails", { data: item })}
        style={style.newsCardContainer}
      >
        <View style={style.newTopListContent}>
          <Text style={style.newsCardContent}>{item?.title || ""}</Text>
          <Image
            source={{ uri: item?.urlToImage || "" }}
            style={style.newsImg}
          />
        </View>
        <View style={style.autherContainer}>
          <Text style={style.autherText}>{item?.author || ""}</Text>
          <Text style={style.dateText}>
            {moment(item?.publishedAt).fromNow() || ""}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <Header title={getText("home")} />
      <View>
        <Text style={style.titleText}>{getText("topStoriesForYou")}</Text>
        <FlatList
          data={categoriesData}
          horizontal
          style={{ marginHorizontal: wp(4), marginVertical: hp(1) }}
          ItemSeparatorComponent={() => <View style={{ width: wp(4) }} />}
          showsHorizontalScrollIndicator={false}
          renderItem={categoriesRenderItem}
        />

        <FlatList
          data={articlesData?.articles}
          showsVerticalScrollIndicator={false}
          renderItem={articlesRenderData}
        />
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
    titleText: {
      color: props.colors.black,
      fontWeight: "600",
      fontSize: fontSize(18),
      margin: wp(4),
    },
    categoriesData: {
      borderWidth: 1,
      paddingVertical: hp(1),
      paddingHorizontal: wp(3),
      borderRadius: wp(3),
      borderColor: props.colors.primary,
    },
    categoriesText: {
      fontSize: fontSize(18),
      fontWeight: "600",
    },
    newsCardContainer: {
      marginVertical: hp(1),
      marginHorizontal: wp(4),
      borderRadius: wp(4),
      backgroundColor: props.colors.white,
      shadowColor: props.colors.grey,
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      padding: wp(3),
      flex: 1,
    },
    newTopListContent: {
      flexDirection: "row",
    },
    newsCardContent: {
      flex: 1,
      color: props.colors.black,
    },
    newsImg: {
      height: "100%",
      width: wp(20),
      borderRadius: wp(2),
    },
    autherContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: hp(1),
    },
    autherText: {
      fontSize: fontSize(16),
      color: props.colors.grey,
      fontWeight: "800",
      flex: 1,
    },
    dateText: {
      fontSize: fontSize(16),
      color: props.colors.grey,
      fontWeight: "600",
    },
  });

//make this component available to the app
export default Home;
