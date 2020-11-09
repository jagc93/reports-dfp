import { LOCATION } from './constants/app.constants';
import { IdiomaEsCO } from './types/app.types';
export class ConfigLanguage {

  public static INSTANCIA: ConfigLanguage;
  private locale: string;
  private locale2: string;
  private idioma: IdiomaEsCO;

  constructor() {}

  public static getINSTANCIA() {
    if (this.INSTANCIA === null) {
      this.INSTANCIA = new ConfigLanguage();
    }
    return this.INSTANCIA;
  }

  public configure(): void {
    if (this.locale2 === undefined) {
      this.locale2 = LOCATION.language;
    }
    if (this.idioma === undefined) {
      this.locale = navigator.language.split('-')[0];
    }
    if (this.locale === 'es') {
      this.idioma = 'COP';
    } else if (this.locale === 'en') {
      this.idioma = 'USD';
    } else if (this.locale === 'af') {
      this.idioma = 'XOF';
    }
  }

  public setIdioma(idioma: IdiomaEsCO) {
    this.idioma = idioma;
  }

  public getIdioma(): IdiomaEsCO {
    return this.idioma;
  }

  public setLocale(locale: string) {
    this.locale = locale;
  }

  public getLocale(): string {
    return this.locale;
  }

  public setLocale2(locale2: string) {
    this.locale2 = locale2;
  }

  public getLocale2(): string {
    return this.locale2;
  }
}
