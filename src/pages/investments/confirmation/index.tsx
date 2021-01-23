import React from "react";
import { Button, Text, View } from "native-base";

import styles from "./styles";
import { ModalProps } from "../../../types/interfaces";
import { Modal } from "react-native";

const InvestmentConfirmation: React.FC<ModalProps> = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>RESGATE EFETUADO!</Text>
          <Text note style={styles.informationText}>
            O valor solicitado estará em sua conta em até 5 dias úteis!
          </Text>
          <Button
            style={styles.buttonView}
            full
            onPress={() => {
              props.setModalVisible(!props.modalVisible);
            }}
          >
            <Text style={styles.buttonText}>NOVO RESGATE</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default InvestmentConfirmation;
