import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/interfaces";
import InvestmentList from "../pages/investments/list";
import commonColors from "../theme/colors/commonColors";
import InvestmentRecover from "../pages/investments/recover";

const AppStack = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="InvestmentList"
        component={InvestmentList}
        options={{
          headerTitle: "Resgate",
          headerTintColor: commonColors.white,
          headerStyle: {
            backgroundColor: commonColors.blue,
            borderBottomWidth: 4,
            borderBottomColor: commonColors.yellow,
          },
        }}
      />
      <AppStack.Screen
        name="InvestmentRecover"
        component={InvestmentRecover}
        options={{
          headerTitle: "Resgate",
          headerTintColor: commonColors.white,
          headerStyle: {
            backgroundColor: commonColors.blue,
            borderBottomWidth: 4,
            borderBottomColor: commonColors.yellow,
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
