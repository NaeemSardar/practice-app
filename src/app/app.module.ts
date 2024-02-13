import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
} from "ngx-ui-loader";
// import { HeaderComponent } from './header-old/header-old.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './product-list/search/search.component';
import { TopHeaderComponent } from './top-header/top-header.component';


// export function loadCrucialData() {
//   return function () {
//     // or use UserService
//     return delay(1000);
//   };
// }

// export function delay(delay: number) {
//   return function () {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, delay);
//     });
//   };
// }
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#E3A048",
  bgsPosition: POSITION.bottomRight,
  bgsSize: 40,
  fgsColor:"#E3A048",
  pbColor:"#E3A048",
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.threeBounce, // foreground spinner type
//  fgsTemplate:SPINNER.doubleBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 8, // progress bar thickness
  text:"Please wait...",
  //textColor:"#5B3B83",
  logoSize:(20),
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
   
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   multi: true,
    //   useFactory: loadCrucialData(),
    // },
    // provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
