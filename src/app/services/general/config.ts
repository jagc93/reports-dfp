import { TranslateService } from '@ngx-translate/core';
import { miInjector } from 'src/app/app.module';
import { ConfigLanguage } from 'src/app/configLanguage';
import { ERR, OK } from 'src/app/constants/app.constants';
import { IConfig } from 'src/app/interfaces/interface';

export class Config {

    private static config: IConfig = null;
    private static status = '';
    private static generalComponente: any;

    /************************************************************************************************
     * Metodo que se usa para obtener la configuración necesaria para el correcto funcionamiento    *
     * de la página. Esto obtiene lo parametrizado en el archivo assets/messages.json               *
     ************************************************************************************************/
    public static loadLanguage(): void {
        const translate = miInjector.get<TranslateService>(TranslateService);

        // este lenguaje se usará como respaldo cuando no se encuentre una traducción en el idioma actual
        translate.setDefaultLang('es');

        // este indica el lenguaje que va a usar basado en el lenguaje que está usando el navegador, si no existe, usa el que se especificó por defecto
        translate.use(ConfigLanguage.INSTANCIA.getLocale());

        translate.get('COMPONENTE_GENERAL').subscribe(response => {
            this.generalComponente = response;
            this.status = OK;
        }, error => {
            console.error(error);
            this.status = ERR;
            throw new Error('No se pudo obtener la información GENERAL de los .json que se encuentran ubicados en assets/language/local_json/');
        });
    }

    public static getConfig() {
        return this.config;
    }

    public static getStatus() {
        return this.status;
    }

    public static getGeneralComponente() {
        return this.generalComponente;
    }
}
