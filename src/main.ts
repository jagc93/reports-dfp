import { registerLocaleData } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import localesCO from '@angular/common/locales/es-CO';

import { AppModule } from './app/app.module';
import { ConfigLanguage } from './app/configLanguage';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

ConfigLanguage.INSTANCIA = null;
ConfigLanguage.getINSTANCIA();
ConfigLanguage.INSTANCIA.configure();
registerLocaleData(localesCO);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
