import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller, //esto es del anchor
    private translateService: TranslateService,

  ) { }

  // Se supone q asi funciona el anchor al hacer el click en el enlace
  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }

  ngOnInit(): void {
  }

}
