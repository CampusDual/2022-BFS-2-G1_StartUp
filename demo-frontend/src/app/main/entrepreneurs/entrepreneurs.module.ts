import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  EntrepreneurListComponent } from './entrepreneurList/entrepreneurList.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { EntrepreneurDetailComponent } from './entrepreneur-detail/entrepreneur-detail.component';


@NgModule({
  declarations: [EntrepreneurListComponent, EntrepreneurDetailComponent ],
  imports: [CommonModule, TranslateModule,  RouterModule],
})
export class EntrepreneursModule {}
