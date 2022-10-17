import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EntrepreneurDetailComponent } from './main/entrepreneurs/entrepreneur-detail/entrepreneur-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'contacts', loadChildren: () => import('./main/contacts/contacts.module').then(x => x.ContactsModule) },
  { path: 'entrepreurs', loadChildren: () => import('./main/entrepreneurs/entrepreneurs.module').then(x => x.EntrepreneursModule) },
  { path: 'entrepreneur-detail', component:EntrepreneurDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
