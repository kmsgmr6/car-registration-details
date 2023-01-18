import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { RegistrationEditComponent } from './registration-list/registration-edit/registration-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationListComponent,
    RegistrationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
