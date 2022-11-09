import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EntrepreneurDetailComponent } from './main/entrepreneurs/entrepreneur-detail/entrepreneur-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {StadisticslineComponent} from './main/stadisticsline/stadisticsline.component';
import {StadisticsbarComponent} from './main/stadisticsbar/stadisticsbar.component';
import { InvestersComponent } from './main/investers/investers.component';
import { DeleteModalComponent } from './main/investers/delete-modal/delete-modal.component';
import { InvesoresComponent } from './main/inversores/invesores/invesores.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent,  pathMatch: 'full'},

  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'contacts', loadChildren: () => import('./main/contacts/contacts.module').then(x => x.ContactsModule) },
  { path: 'investers', component:InvestersComponent},
  { path: 'entrepreurs', loadChildren: () => import('./main/entrepreneurs/entrepreneurs.module').then(x => x.EntrepreneursModule) },
  { path: 'entrepreneur-detail', component:EntrepreneurDetailComponent },
  { path: 'landing-page', component:LandingPageComponent },
  { path: 'stadisticsline', component:StadisticslineComponent },
  { path: 'stadisticsbar', component:StadisticsbarComponent },
  { path: 'app-delete-modal',component:DeleteModalComponent},
  { path: 'inversores', loadChildren: () => import('./main/inversores/invesores/inversores.module').then(x => x.InversoresModule) },
  { path: 'startup', loadChildren: () => import('./main/startup/startup.module').then(x => x.StartupModule) }




];

@NgModule({
  //Importo anchorScrolling xa q me funcionen los enlaces en el landingpage.html (no va)
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
