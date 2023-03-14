import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LangingPageComponent } from './langing-page/langing-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeWaterComponent } from './safe-water/safe-water.component';
import { PollutedWaterComponent } from './polluted-water/polluted-water.component';

@NgModule({
  declarations: [
    AppComponent,
    LangingPageComponent,
    SafeWaterComponent,
    PollutedWaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
