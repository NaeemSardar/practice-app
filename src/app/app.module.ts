import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './template-driven-form/registration-form/registration-form.component';
import { ReactiveFormComponent } from './reactive-form-approach/registration-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
} from "ngx-ui-loader";
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
  bgsColor: "#35155D",
  bgsPosition: POSITION.bottomRight,
  bgsSize: 40,
  fgsColor:"#5B3B83",
  pbColor:"#5B3B83",
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.threeBounce, // foreground spinner type
//  fgsTemplate:SPINNER.doubleBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  text:"Please wait...",
  //textColor:"#5B3B83",
  logoSize:(20),
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule
   
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
export class AppModule { }
