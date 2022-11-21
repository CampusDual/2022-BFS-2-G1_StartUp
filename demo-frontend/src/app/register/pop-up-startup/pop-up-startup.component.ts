import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StartupsDataSource } from 'src/app/model/datasource/startup.datasource';
import { AnyField, AnyPageFilter } from 'src/app/model/rest/filter';
import { Startup } from 'src/app/model/startup';
import { StartupService } from 'src/app/services/startup.service';
import { MatPaginator } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, fromEvent, tap, merge } from 'rxjs';
import { SortFilter } from '../../model/rest/filter';

@Component({
  selector: 'app-pop-up-startup',
  templateUrl: './pop-up-startup.component.html',
  styleUrls: ['./pop-up-startup.component.scss']
})
export class PopUpStartupComponent implements OnInit {

   //variable MatchBtn
   MatchBtn: boolean = true;
   BubblyButton: boolean =false;

   // INtento de match
  selectedStartup?: Startup

  error = false;
  dataSource: StartupsDataSource;

  list;
  public startups = [];
  fields = ['name', 'email', 'description', 'idBusinessSector', 'idStartUpState','anualInvoicing','fundationYear','idEntrepreneur'];
  selection = new SelectionModel<Startup>(true, []);

  @ViewChild('input') input: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private startupService: StartupService,   private translate: TranslateService, private dialog: MatDialog) {


   }

  ngOnInit(): void {
    this.dataSource = new StartupsDataSource(this.startupService);
    const pageFilter = new AnyPageFilter(
      '',
      this.fields.map((field) => new AnyField(field)),
      0,
      6,
      'name'

    );
    this.dataSource.getStartups(pageFilter);
    this.getConsola(pageFilter);

  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        this.paginator.pageIndex = 0;
        this.loadStartupPage();
      })
    )
    .subscribe();

     // reset the paginator after sorting
   this.sort.sortChange.subscribe(() => {
    this.paginator.pageIndex = 0;
    this.selection.clear();
   });

    // on sort or paginate events, load a new page
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      tap(() => {
        this.loadStartupPage();
      })

    )
    .subscribe();
  }

  loadStartupPage() {
    this.selection.clear();
    this.error = false;
    const pageFilter = new AnyPageFilter(
      this.input.nativeElement.value,
      this.fields.map((field) => new AnyField(field)),
      this.paginator.pageIndex,
      this.paginator.pageSize
    );

    pageFilter.order = [];
    pageFilter.order.push(
      new SortFilter(this.sort.active, this.sort.direction.toString())
    );
    this.dataSource.getStartups(pageFilter)

  }




  getConsola(pageFilter : AnyPageFilter){

    this.startupService.getStartups(pageFilter).subscribe((response) =>{
      this.startups = response.data;
      console.log('>>>Startups>>>', this.startups[0].idStartupState.type);

      console.log('>>>>>>>>Data Startup',response.data)})
    }


    onclick() {
      this.MatchBtn = !this.MatchBtn;
    }

    onSelected(startup: Startup): void {
      this.selectedStartup = startup;
     console.log('>>>>>Sselec:', startup);

    }

    changeProgresValue(row: string) {
      if (row == 'Pre-Seed') {
        return 20;
      } else if (row == 'Seed') {
        return 40;
      } else if (row == 'Early Stage') {
        return 60;
      } else if (row == 'Growth Stage') {
        return 80;
      } else if (row == 'Scaleup') {
        return 90;
      } else {
        return 100;
      }
    }

  }


