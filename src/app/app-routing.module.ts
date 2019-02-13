import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddarticleComponent } from './addarticle/addarticle.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'addarticle', component: AddarticleComponent },
  { path: 'editarticle', component: AddarticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
