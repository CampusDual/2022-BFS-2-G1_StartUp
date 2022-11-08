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
    /**
     * Probas de métodos do service
     */
  // this.getAll();
  /**
   * Probas da paginación
   */
   // this.getEntreprenuerPage({page:"0", size: "4"})
   // this.getStartUpPage({page:"0", size: "4"})
  }



}
