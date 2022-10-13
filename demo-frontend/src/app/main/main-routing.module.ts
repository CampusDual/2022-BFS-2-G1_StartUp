import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { AuthGuard } from '../auth/auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { EntrepreneurComponent } from './entrepreneurs/entrepreneur/entrepreneur.component';

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
    path: 'entrepreneur',
    component: EntrepreneurComponent,
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
