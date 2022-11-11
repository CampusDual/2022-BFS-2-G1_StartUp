import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pop-up-startup',
  templateUrl: './pop-up-startup.component.html',
  styleUrls: ['./pop-up-startup.component.scss']
})
export class PopUpStartupComponent implements OnInit {

  name;
  email;
  description;
  businessSector;
  startupState;
  anualInvoicing;
  fundationYear;

  constructor() {
    this.name = '';
    this.email = '';
    this.description = '';
    this.businessSector = '';
    this.startupState = '';
    this.anualInvoicing = '';
    this.fundationYear = '';

   }

  ngOnInit(): void {
  }

}
