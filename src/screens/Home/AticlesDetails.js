//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/common/Header";
import { getText } from "../../helper/globalFunction";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { fontSize } from "../../helper/utils";
import { hp, wp } from "../../helper/constants";
import moment from "moment";
import { WebView } from "react-native-webview";

// create a component
const AticlesDetails = ({ route }) => {
  console.log("route + routeroute", route);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const finalDisplayData = route?.params?.data;

  const style = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

  return (
    <View style={style.container}>
      <Header isBack title={getText("aticlesDetails")} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={style.authorText}>{finalDisplayData?.author || ""}</Text>
        <Text style={style.authorText}>
          {moment(finalDisplayData?.publishedAt).fromNow() || ""}
        </Text>
      </View>
      <View style={{ flex: 1, marginHorizontal: wp(4) }}>
        <Text style={style.newsCardContent}>
          {finalDisplayData?.title || ""}
        </Text>
        <Text
          style={[
            style.newsCardContent,
            { marginTop: hp(2), fontWeight: "800" },
          ]}
        >
          {"Content:"}
        </Text>
        <Text style={style.newsCardContent}>
          {finalDisplayData?.content || ""}
        </Text>
        <WebView
          source={{ uri: finalDisplayData?.url || "" }}
          style={{ flex: 1, marginVertical: hp(1) }}
          startInLoadingState={true}
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
    authorText: {
      color: props.colors.black,
      fontSize: fontSize(18),
      fontWeight: "bold",
      margin: wp(4),
    },
    newsCardContent: {
      color: props.colors.black,
      fontWeight: "500",
    },
  });
//make this component available to the app
export default AticlesDetails;
