import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
