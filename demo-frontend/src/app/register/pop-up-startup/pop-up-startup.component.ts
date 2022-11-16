import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { StartupsDataSource } from 'src/app/model/datasource/startup.datasource';
import { AnyField, AnyPageFilter } from 'src/app/model/rest/filter';
import { Startup } from 'src/app/model/startup';
import { StartupService } from 'src/app/services/startup.service';



@Component({
  selector: 'app-pop-up-startup',
  templateUrl: './pop-up-startup.component.html',
  styleUrls: ['./pop-up-startup.component.scss']
})
export class PopUpStartupComponent implements OnInit {

  dataSource: StartupsDataSource;
  fields = ['name', 'email', 'description', 'idBusinessSector', 'idStartUpState','anualInvoicing','fundationYear','idEntrepreneur'];
  selection = new SelectionModel<Startup>(true, []);



  constructor(private startupService: StartupService) {


   }

  ngOnInit(): void {
    this.dataSource = new StartupsDataSource(this.startupService);
    const pageFilter = new AnyPageFilter(
      '',
      this.fields.map((field) => new AnyField(field)),
      0,
      5,
      'name'
      
    );
    this.dataSource.getStartups(pageFilter);
    this.getConsola(pageFilter);

    // Chamada o back pra traer de 5 en 5 as Startup
    // NOn sei como acceder a cada 1
   

  }

  getConsola(pageFilter : AnyPageFilter){

    this.startupService.getStartups(pageFilter).subscribe((response) =>{
      console.log(response);})
    }

 //console.log('>>>>>>>>Data Startup',this.dataSource.getStartups(pageFilter));
  }


