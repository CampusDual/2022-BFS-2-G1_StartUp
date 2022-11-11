import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PopUpUserComponent } from '../register/user/pop-up-user/pop-up-user.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();


  selectedLanguage = this.translateService.currentLang;


  constructor(
    public router: Router,
    private translateService: TranslateService,
    private dialogRefUser: MatDialog,

  ) { }

  openDialogUser() {
    this.dialogRefUser.open(PopUpUserComponent)
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = '60%';
    this.dialogRefUser.open(PopUpUserComponent, dialogConfig);

  }

  toogleLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translateService.use(lang);
  }
  // metodo para que funcionen los enlaces dentro de la misma landing page
  public onClick(elementId: string): void {

    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  }

  ngOnInit(): void {
  }



}
