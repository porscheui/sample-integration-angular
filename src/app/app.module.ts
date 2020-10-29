import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PorscheDesignSystemModule,
  PrefixService,
  WEB_COMPONENTS_PREFIX
} from '@porsche-design-system/components-angular';
import * as fromPages from './pages';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ...fromPages.pages],
  imports: [BrowserModule, AppRoutingModule, PorscheDesignSystemModule, FormsModule],
  providers: [{ provide: WEB_COMPONENTS_PREFIX, useValue: 'sample-prefix' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private prefixService: PrefixService) {
    prefixService.load({ prefix: '' });
  }
}
