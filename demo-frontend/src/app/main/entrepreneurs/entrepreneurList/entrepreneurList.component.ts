import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entrepreneur } from 'src/app/model/entrepreneur';
import { Invester } from 'src/app/model/invester';
import { RangeInvester } from 'src/app/model/rangeInvester';
import { Startup } from 'src/app/model/startup';
import { EntrepreneureService } from 'src/app/services/entrepreneur.service';
import { InvesterService } from 'src/app/services/invester.service';
import { RangeInvesterService } from 'src/app/services/range-invester.service';
import { StartupService } from 'src/app/services/startup.service';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneurList.component.html',
  styleUrls: ['./entrepreneurList.component.scss'],
})
export class EntrepreneurListComponent implements OnInit {
  entrepreneurs: Entrepreneur[];
  investers: Invester[];
  startups: Startup[];
  rangeInvesterList: RangeInvester[];
  list;
  subscriptions: any = {};
  entrepreneur: any;

  constructor(
    private entrepreneurService: EntrepreneureService,
    private investerService: InvesterService,
    private startupService: StartupService,
    private rangeInvesterService: RangeInvesterService,
    private translate: TranslateService
  ) {}

  miramdom(): any {
    return 'https://picsum.photos/id/200/300';
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getEntrepreneurs();
    this.getAllInvesters();
    this.getAllStartUps();
    this.getAllRangeInvester();
  }

  getEntrepreneurs() {
    this.entrepreneurService.getEntrepreneurs().subscribe((entrepreneur) => {
      this.entrepreneurs = entrepreneur;
      console.log(this.entrepreneurs);
    });
  }

  getAllInvesters() {
    this.investerService.getInvesters().subscribe((invester) => {
      this.investers = invester;
      console.log(this.investers);
    });
  }

  getAllStartUps() {
    this.startupService.getStartups().subscribe((startup) => {
      this.startups = startup;
      console.log(this.startups);
    });
  }

  getAllRangeInvester() {
    this.rangeInvesterService.getRangeInvester().subscribe((ri) => {
      this.rangeInvesterList = ri;
      console.log(this.rangeInvesterList);
    });
  }

  deleteEntrepreneur(id: number) {
    this.entrepreneurService.delete(id).subscribe(
      (data) => {
        this.entrepreneurs = this.entrepreneurs.filter(
          (item) => item.id !== id
        );
        console.log('Borrado!');
      },
      (error) => {
        console.log('Erro ó borrar');
      }
    );
  }

  // Declaro método para recoger el evento click de la parte de html
  public clickEvent() {
  this.color = 1;
  console.log('Evento click', this.color);

  }



}
