import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public router: Router,

    private translateService: TranslateService,

  ) { }

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
