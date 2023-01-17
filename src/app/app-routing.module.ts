import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { RegistrationListComponent } from "./registration-list/registration-list.component";

const appRoutes:Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component : RegistrationListComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}