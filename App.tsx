import "react-native-gesture-handler";

import React from "react";
import { Root } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { SafeAreaView } from "react-native";
import commonColors from "./src/theme/colors/commonColors";

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: commonColors.blue }}>
        <Root>
          <NavigationContainer>
            <Routes></Routes>
          </NavigationContainer>
        </Root>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: commonColors.white }}
      ></SafeAreaView>
    </>
  );
};

export default App;
