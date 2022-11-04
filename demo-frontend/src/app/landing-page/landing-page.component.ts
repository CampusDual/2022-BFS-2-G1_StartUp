import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


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

  ) { }

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
