import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { InvesoresComponent } from './inversores/invesores/invesores.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
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
    path: 'inversores',
    component: InvesoresComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['INVESTORS'],
    },
  },
  {
    path: 'startup',
    component: StartupComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ['STARTUPS'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
