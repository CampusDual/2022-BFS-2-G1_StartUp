import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { EditInversorComponent } from './edit-inversor/edit-inversor.component';
import { InversorLayoutComponent } from './inversor-layout/inversor-layout.component';
import { InversorRoutingModule } from './inversores-routing.module';
import { InvesoresComponent } from './invesores.component';

@NgModule({
  declarations: [
    EditInversorComponent,
    InvesoresComponent,
    InversorLayoutComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    InversorRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    TranslateModule,
  ],
})
export class InversoresModule {}
