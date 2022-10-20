import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EntrepreneurDetailComponent } from './main/entrepreneurs/entrepreneur-detail/entrepreneur-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'contacts', loadChildren: () => import('./main/contacts/contacts.module').then(x => x.ContactsModule) },
  { path: 'entrepreurs', loadChildren: () => import('./main/entrepreneurs/entrepreneurs.module').then(x => x.EntrepreneursModule) },
  { path: 'entrepreneur-detail', component:EntrepreneurDetailComponent },
  { path: 'landing-page', component:LandingPageComponent }
];

@NgModule({
  //Importo anchorScrolling xa q me funcionen los enlaces en el landingpage.html (no va)
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
