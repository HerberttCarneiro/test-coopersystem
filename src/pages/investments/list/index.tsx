import React, { useEffect, useState } from "react";
import {
  Body,
  Container,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Toast,
} from "native-base";

import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { IInvestiment } from "../../../types/interfaces";
import { Indicator } from "../../../types/interfaces";
import { numberFormatToMoney } from "../../../utils/formats";
import { useNavigation } from "@react-navigation/native";
import { get } from "../../../services/api";

const InvestmentList: React.FC = () => {
  const navigation = useNavigation();
  const [investiment, setInvestiment] = useState<IInvestiment[]>([]);

  useEffect(() => {
    getInvestiments();
  }, []);

  async function getInvestiments() {
    try {
      const response: { listaInvestimentos: IInvestiment[] } = await get(
        "5e76797e2f0000f057986099"
      );
      setInvestiment(response.listaInvestimentos);
    } catch (error) {
      Toast.show({
        type: "danger",
        text: error,
      });
    }
  }

  const renderItem = ({ item }: { item: IInvestiment }) => {
    return (
      <ListItem
        thumbnail
        key={item.nome}
        noBorder
        onPress={() => {
          if (item.indicadorCarencia == Indicator.HAS_NO_INDICATOR) {
            navigation.navigate("InvestmentRecover", item);
          }
        }}
        style={
          item.indicadorCarencia == Indicator.HAS_INDICATOR
            ? styles.disableItem
            : styles.enableItem
        }
      >
        <Left>
          {item.indicadorCarencia == Indicator.HAS_INDICATOR ? (
            <Icon type="MaterialIcons" name="money-off" />
          ) : (
            <Icon type="MaterialIcons" name="attach-money" />
          )}
        </Left>
        <Body>
          <Text>{item.nome}</Text>
          <Text note>{item.objetivo}</Text>
        </Body>
        <Right>
          <Text style={styles.moneyText}>
            {numberFormatToMoney(item.saldoTotalDisponivel)}
          </Text>
        </Right>
      </ListItem>
    );
  };

  return (
    <Container>
      <FlatList
        data={investiment}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
      />
    </Container>
  );
};

export default InvestmentList;
