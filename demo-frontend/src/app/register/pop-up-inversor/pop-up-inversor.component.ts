import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InversoresDataSource } from '../../model/datasource/inversores.datasource';
import { InversorService } from '../../services/inversor.service';
import { AnyPageFilter, AnyField } from '../../model/rest/filter';



@Component({
  selector: 'app-pop-up-inversor',
  templateUrl: './pop-up-inversor.component.html',
  styleUrls: ['./pop-up-inversor.component.scss']
})
export class PopUpInversorComponent implements OnInit {


  dataSource: InversoresDataSource;

  public inversores = [];

  fields = [
    'id',
    'name',
    'email',
    'idInvesterRange',
    'idBusinessSector',
    'idStartUpState',
  ];



  constructor( private inversorService: InversorService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.dataSource = new InversoresDataSource(this.inversorService);
    const pageFilter = new AnyPageFilter(
      '', this.fields.map((field) => new AnyField(field)),
      0,
      10,
      'name'
    );

    this.dataSource.getInversores(pageFilter);
    this.getConsola(pageFilter);
  }

  getConsola(pageFilter : AnyPageFilter){

    this.inversorService.getInversores(pageFilter).subscribe((response) => {
      this.inversores = response.data;
      console.log('>>>>NOMBRE INVERSOR: ', this.inversores[0].name);

      console.log('>>>> DATA INVERSORES', response.data);


    })

  }

}
