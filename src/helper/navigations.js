import {CommonActions} from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName) {
  _navigator.dispatch(CommonActions.navigate(routeName));
}

function resetRoute(routeName) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  );
}

export default {
  navigate,
  resetRoute,
  setTopLevelNavigator,
};
