import { Component, OnInit } from '@angular/core';
import { Entrepreneur } from '../../../model/entrepreneur';
import { TranslateService } from '@ngx-translate/core';
import { EntrepreneureService } from '../../../services/entrepreneur.service';

@Component({
  selector: 'app-entrepreneur-detail',
  templateUrl: './entrepreneur-detail.component.html',
  styleUrls: ['./entrepreneur-detail.component.scss']
})
export class EntrepreneurDetailComponent implements OnInit {
  entrepreneur: Entrepreneur[];


  constructor(
    private entrepreneurService: EntrepreneureService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
