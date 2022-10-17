import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { Entrepreneur } from 'src/app/model/entrepreneur';
import { EntrepreneureService } from 'src/app/services/entrepreneur.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneurList.component.html',
  styleUrls: ['./entrepreneurList.component.scss'],
})
export class EntrepreneurListComponent implements OnInit {
  entrepreneurs: Entrepreneur[];
  list;
  subscriptions: any = {};
  public color: number; // declaro variable para darle un valor al evento cilck de html;

  constructor(
    private entrepreneurService: EntrepreneureService,
    private translate: TranslateService
  ) {}

  miramdom(): any {
    return 'https://picsum.photos/id/200/300';
  }
  ngOnInit(): void {
    this.entrepreneurService
      .getEntrepreneurs()
      .subscribe((entrepreneur) => (this.entrepreneurs = entrepreneur));

    this.subscriptions.entrepreneurService = this.entrepreneurService
      .getData()
      .subscribe((list) => {
        this.list = list;
      });
  }

  // Declaro método para recoger el evento click de la parte de html
  public clickEvent() {
  this.color = 1;
  console.log('Evento click', this.color);

  }



}
