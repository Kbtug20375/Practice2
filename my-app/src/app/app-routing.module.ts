import { NgModule, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component'

const routes: Routes = [{
  component:HomeComponent,
  path:'Home',
},
{
  component:LoginComponent,
  path:'login'
},
{
  component:SignupComponent,
  path:'Signup'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
