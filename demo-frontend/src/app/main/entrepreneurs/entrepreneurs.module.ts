import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EntrepreneurComponent],
  imports: [CommonModule, TranslateModule],
})
export class EntrepreneursModule {}
