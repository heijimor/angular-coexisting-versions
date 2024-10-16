import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define("application-two", el);
  }

  ngDoBootstrap() {}
}
