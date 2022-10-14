import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Observer } from 'rxjs';
import { Entrepreneur } from 'src/app/model/entrepreneur';
import { EntrepreneureService } from 'src/app/services/entrepreneur.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss'],
})
export class EntrepreneurComponent implements OnInit {
  entrepreneurs: Entrepreneur[];
  list;
  subscriptions: any = {};

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
}
