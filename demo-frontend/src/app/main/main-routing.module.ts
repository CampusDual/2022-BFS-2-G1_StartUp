import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { EntrepreneurDetailComponent } from './entrepreneurs/entrepreneur-detail/entrepreneur-detail.component';
import { EntrepreneurListComponent } from './entrepreneurs/entrepreneurList/entrepreneurList.component';
import { InvesoresComponent } from './inversores/invesores/invesores.component';
import { InvestersComponent } from './investers/investers.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { StadisticslineComponent } from './stadisticsline/stadisticsline.component';
import { StartupComponent } from './startup/startup.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainHomeComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'investers',
    component: InvestersComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'entrepreneur',
    component: EntrepreneurListComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'entrepreneur-detail',
    component: EntrepreneurDetailComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'stadistics',
    component: StadisticsComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'stadisticsline',
    component: StadisticslineComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'inversores',
    component: InvesoresComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
  {
    path: 'startup',
    component: StartupComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['CONTACTS'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
