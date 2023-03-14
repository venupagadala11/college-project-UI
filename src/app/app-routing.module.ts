import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { PollutedWaterComponent } from './polluted-water/polluted-water.component';
import { SafeWaterComponent } from './safe-water/safe-water.component';

const routes: Routes = [
  {path:'', component:LangingPageComponent},
  {path:'safe-water', component:SafeWaterComponent},
  {path:'polluted-water', component:PollutedWaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
