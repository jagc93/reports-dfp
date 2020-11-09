import { IdiomaEsCO } from '../types/app.types';

/************************************************************************************
 * Constante que se usa para la configuración del lenguaje de la página.            *
 * las monedas soportadas por el lenguaje es-CO son los siguientes:                 *
 *      | "" | "AUD" | "BRL" | "CAD" | "CNY" | "COP" | "ESP" | "EUR" | "FKP"        *
 *      | "GBP" | "HKD" | "ILS" | "INR" | "JPY" | "KRW" | "MXN" | "NZD" | "RON"     *
 *      | "SSP" | "SYP" | "TWD" | "USD" | "VEF" | "VND" | "XAF" | "XCD" | "XOF"     *
 ************************************************************************************/
export const LOCATION: { language: string; moneda: IdiomaEsCO } = {
    language: 'es-CO',
    moneda: 'COP'
};

export const OK = 'OK';
export const ERR = 'ERR';
