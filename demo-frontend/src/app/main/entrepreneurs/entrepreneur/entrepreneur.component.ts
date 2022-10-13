import { Component, OnInit } from '@angular/core';
import { Entrepreneur } from 'src/app/model/entrepreneur';
import { EntrepreneureService } from 'src/app/services/entrepreneur.service';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss'],
})
export class EntrepreneurComponent implements OnInit {
  entrepreneurs: Entrepreneur[];

  constructor(private entrepreneurService: EntrepreneureService) {}

  miramdom():any{

    return "https://picsum.photos/id/200/300";

  }
  ngOnInit(): void {
    this.entrepreneurService
      .getEntrepreneurs()
      .subscribe((entrepreneur) => (this.entrepreneurs = entrepreneur));
  }
}
