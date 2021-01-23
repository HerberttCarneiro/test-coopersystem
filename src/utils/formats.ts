export const numberFormatToMoney = (value: number): string | undefined => {
    if (value != undefined) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
}
export function onlyNumbers(value: any) {
    return parseInt(value.toString().replace(/[^\d]/g, ""));
}