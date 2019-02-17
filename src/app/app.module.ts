import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routers/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SelectComponent } from './components/common/select/select.component';
import { CheckboxComponent } from './components/common/checkbox/checkbox.component';
import { ButtonComponent } from './components/common/button/button.component';
import { ArticlesItemComponent } from './components/articles/articles-item/articles-item.component';
import { AddarticleComponent } from './components/articles/addarticle/addarticle.component';
import { InputComponent } from './components/common/input/input.component';

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
