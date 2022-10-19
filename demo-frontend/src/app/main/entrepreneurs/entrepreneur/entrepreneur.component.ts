import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entrepreneur } from 'src/app/model/entrepreneur';
import { EntrepreneureService } from 'src/app/services/entrepreneur.service';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.scss'],
})
export class EntrepreneurComponent implements OnInit {
  entrepreneurs: Entrepreneur[];
  list;
  subscriptions: any = {};
  entrepreneur: any;

  constructor(
    private entrepreneurService: EntrepreneureService,
    private translate: TranslateService
  ) {}

  miramdom(): any {
    return 'https://picsum.photos/id/200/300';
  }
  ngOnInit(): void {
    this.getAll();

    // probas dos métodos do service
    //this.deleteEntrepreneur(209);

    // this.entrepreneurService.find(210).subscribe((response) => {
    //   this.entrepreneur = response;
    //   console.log(this.entrepreneur)
    // });
  }

  getAll() {
    this.entrepreneurService
      .getEntrepreneurs()
      .subscribe((entrepreneur) => (this.entrepreneurs = entrepreneur));
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
}
