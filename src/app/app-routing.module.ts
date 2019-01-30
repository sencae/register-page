import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [

  { path: 'register', component: RegisterPageComponent },
  { path: 'stub', component: UserPageComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
