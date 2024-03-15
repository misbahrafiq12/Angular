import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CodeBinComponent } from './code-bin/code-bin.component';

export const routes: Routes = [
    {path:'login' , component:LoginComponent},
    {path:'signup', component:RegisterationComponent},
    {path: '' ,redirectTo:'/login', pathMatch:"full"},
    {path:'codebin',component:CodeBinComponent},
    {path:'**', component:ErrorpageComponent}
];
