import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {  MatDialog } from '@angular/material/dialog';
import { PopUpStartupComponent } from './pop-up-startup/pop-up-startup.component';
import { PopUpInversorComponent } from './pop-up-inversor/pop-up-inversor.component';
import { PopUpEntrepreneurComponent } from './pop-up-entrepreneur/pop-up-entrepreneur.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'angular-material';

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    public router: Router,
    private translateService: TranslateService,
    private dialogRefStartup: MatDialog,
    private dialogRefInversor: MatDialog,
    private dialogRefEntrepreneur: MatDialog,
    ) { }

    openDialogStartup() {
      this.dialogRefStartup.open(PopUpStartupComponent, {
        data : {
          name: '',
          email: '',
          description: '',
          businessSector: '',
          startupState: '',
          anualInvoicing: '',
          fundationYear: ''

        }
      });
    }

    openDialogInversor() {
      this.dialogRefInversor.open(PopUpInversorComponent)
    }

    openDialogEntrepreneur() {
      this.dialogRefEntrepreneur.open(PopUpEntrepreneurComponent)
    }

  ngOnInit(): void {
  }

}
