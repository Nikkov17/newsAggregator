import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { SelectComponent } from './common/select/select.component';
import { FormComponent } from './common/form/form.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';
import { ButtonComponent } from './common/button/button.component';
import { ArticlesItemComponent } from './articles/articles-item/articles-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    SelectComponent,
    FormComponent,
    CheckboxComponent,
    ButtonComponent,
    ArticlesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
