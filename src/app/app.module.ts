import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { SelectComponent } from './common/select/select.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { ButtonComponent } from './common/button/button.component';
import { ArticlesItemComponent } from './articles/articles-item/articles-item.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { InputComponent } from './common/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    SelectComponent,
    CheckboxComponent,
    ButtonComponent,
    ArticlesItemComponent,
    AddarticleComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
