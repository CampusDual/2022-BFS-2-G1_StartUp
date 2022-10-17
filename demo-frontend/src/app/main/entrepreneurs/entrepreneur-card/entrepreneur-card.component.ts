import { Component, OnInit } from '@angular/core';
import { EntrepreneureService } from '../../../services/entrepreneur.service';
import { Entrepreneur } from '../../../model/entrepreneur';

@Component({
  selector: 'app-entrepreneur-card',
  template: `
  <div class="cnt-block equal-hight" style="height: 349px;">

  <button type="button" class="icon-button" (click)="clickEvent()">

    <img src="https://picsum.photos/200/300" alt="avatar" >
    <span ngClass="{correcto}" class="material-icons icon-button__badge">task_alt</span>

  </button>

  <h3 class=" first-name-last-name "><a routerLink="/entrepreneur-detail">{{entrepreneur.firstName}} {{entrepreneur.lastName}}</a></h3>

  <p>{{entrepreneur.idProfessionalProfile.typeProfessionalProfile}}</p>

  <ul class="follow-us clearfix ">

      <li><a href="{{entrepreneur.linkedinProfile}} "><i class="bi bi-linkedin " aria-hidden="true "></i></a></li>

  </ul>
</div>
  `,
  styleUrls: ['./entrepreneur-card.component.scss'],
})
export class EntrepreneurCardComponent implements OnInit {
  entrepreneurs: Entrepreneur[];
  constructor(private service: EntrepreneureService) {}

  ngOnInit(): void {
    this.service
      .getEntrepreneurs()
      .subscribe((entrepreneur) => (this.entrepreneurs = entrepreneur));
  }
}
