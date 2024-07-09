import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private readonly injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define("application-two", el);
  }

  ngDoBootstrap() {}
}
