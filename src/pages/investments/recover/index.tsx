import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Footer,
  FooterTab,
  List,
  ListItem,
  Separator,
  Text,
  Toast,
  View,
} from "native-base";

import styles from "./styles";
import { IInvestiment, IStock } from "../../../types/interfaces";
import { numberFormatToMoney, onlyNumbers } from "../../../utils/formats";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native";
import InvestmentConfirmation from "../confirmation";
import CurrencyInput from "react-native-currency-input";
import commonColors from "../../../theme/colors/commonColors";

const InvestmentRecover: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, IInvestiment>, string>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [fullAmount, setFullAmount] = useState<string>();
  const [investiment, setInvestiment] = useState<IInvestiment>(route.params);

  useEffect(() => {
    getFullAmount();
  }, [investiment]);

  const setValueStock = (value: number, stock: IStock) => {
    let indexStock: number = 0;
    investiment.acoes.map((value, index) => {
      if (value.id == stock.id) {
        indexStock = index;
      }
    });
    const newInvestiment = Object.assign({}, investiment);
    newInvestiment.acoes[indexStock].value = value;
    validStocks(newInvestiment, indexStock);
    console.log(newInvestiment.acoes[indexStock].invalid);

    setInvestiment(newInvestiment);
  };

  const getFullAmount = () => {
    let sum = sumStocks();
    if (sum > 0) {
      setFullAmount(numberFormatToMoney(sum));
    } else {
      setFullAmount(undefined);
    }
  };

  const sumStocks = () => {
    return investiment.acoes.reduce(function (accumulator, currentValue) {
      if (currentValue.value > 0) {
        return accumulator + currentValue.value;
      }
      return accumulator;
    }, 0);
  };

  const validStocks = (newInvestiment: IInvestiment, indexStock: number) => {
    let stock = newInvestiment.acoes[indexStock];
    stock.invalid = false;
    if (stock.value > stock.percentual) {
      stock.invalid = true;
    }
    newInvestiment.acoes[indexStock] = stock;

    return newInvestiment;
  };

  const confirm = () => {
    let isValid = true;

    investiment.acoes.map((stock) => {
      if (stock.invalid) {
        isValid = false;
        Toast.show({
          type: "danger",
          swipeDisabled: false,
          buttonText: "Entendi!",
          buttonTextStyle: {
            color: commonColors.black,
          },
          text: `O valor da ação ${
            stock.nome
          } não pode ser maior que ${numberFormatToMoney(stock.percentual)}`,
        });
        return;
      }
    });

    if (isValid) {
      setModalVisible(true);
    }
  };

  return (
    <Container>
      <InvestmentConfirmation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      ></InvestmentConfirmation>
      <View style={styles.content}>
        <ScrollView>
          <List>
            <Separator bordered>
              <Text>DADOS DO INVESTIMENTO</Text>
            </Separator>
            <ListItem noBorder>
              <Text style={styles.textList}>Nome</Text>
              <Text style={styles.valueList}>{investiment.nome}</Text>
            </ListItem>
            <ListItem noBorder>
              <Text style={styles.textList}>Saldo disponível total</Text>
              <Text style={styles.valueList}>
                {numberFormatToMoney(investiment.saldoTotalDisponivel)}
              </Text>
            </ListItem>
            <ListItem last></ListItem>
            <Separator bordered>
              <Text>RESGATE DO SEU JEITO</Text>
            </Separator>
            {investiment.acoes.map((stock, index) => (
              <View key={stock.id} style={styles.stockList}>
                <ListItem noBorder>
                  <Text style={styles.textList}>Ação</Text>
                  <Text style={styles.valueList}>{stock.nome}</Text>
                </ListItem>
                <ListItem noBorder>
                  <Text style={styles.textList}>Saldo acumulado</Text>
                  <Text style={styles.valueList}>
                    {numberFormatToMoney(stock.percentual)}
                  </Text>
                </ListItem>
                <ListItem noBorder>
                  <Text note>Valor a resgatar</Text>
                </ListItem>
                <ListItem noBorder style={styles.listItemInput}>
                  <CurrencyInput
                    value={investiment.acoes[index].value}
                    onChangeValue={(text: any) => setValueStock(text, stock)}
                    unit="R$"
                    delimiter="."
                    separator=","
                    precision={2}
                    style={styles.input}
                  />
                  {stock.percentual < stock.value && (
                    <Text style={styles.inputError}>
                      Valor não pode ser maior que{" "}
                      {numberFormatToMoney(stock.percentual)}
                    </Text>
                  )}
                </ListItem>
              </View>
            ))}
          </List>
        </ScrollView>
        {fullAmount && (
          <View style={styles.boxValue}>
            <View style={styles.boxText}>
              <Text style={styles.textList}>Valor total a resgatar</Text>
              <Text style={styles.valueList}>{fullAmount}</Text>
            </View>
          </View>
        )}
      </View>
      <Footer style={styles.footer}>
        <FooterTab>
          <Button full onPress={() => confirm()}>
            <Text style={styles.footerText}>CONFIRMAR RESGATE</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default InvestmentRecover;
