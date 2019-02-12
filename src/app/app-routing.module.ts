import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddarticleComponent } from './addarticle/addarticle.component';

const routes: Routes = [
  { path: 'addarticle', component: AddarticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
