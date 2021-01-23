import InvestmentList from "../pages/investments/list";
import InvestmentRecover from "../pages/investments/confirmation";

export type RootStackParamList = {
    InvestmentList: typeof InvestmentList;
    InvestmentRecover: typeof InvestmentRecover;
};

export interface IInvestiment {
    nome: string,
    objetivo: string,
    saldoTotalDisponivel: number,
    indicadorCarencia: string,
    acoes: IStock[]
}

export interface IStock {
    id: string,
    nome: string,
    percentual: number
    value: any,
    invalid: boolean
}

export interface ModalProps {
    modalVisible: boolean,
    setModalVisible: Function,
}

export enum Indicator {
    "HAS_INDICATOR" = "S",
    "HAS_NO_INDICATOR" = "N",
}