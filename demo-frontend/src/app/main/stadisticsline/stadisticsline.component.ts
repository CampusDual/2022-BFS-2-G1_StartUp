import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-stadisticsline',
  templateUrl: './stadisticsline.component.html',
  styleUrls: ['./stadisticsline.component.scss']
})
export class StadisticslineComponent implements OnInit {
  multi: any[];
  view:[number,number] = [1400, 600];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: any;
  yAxisLabel: any;
  timeline: boolean = true;
  legendTitle:any;
  junuary:any;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private translate: TranslateService) { 
    Object.assign(this, { multi });
  
  this.translate.get(['stadisticsline.invoicing']).subscribe(translations=>{
    this.yAxisLabel=translations['stadisticsline.invoicing'];
    

  });
  this.translate.get(['stadisticsline.year']).subscribe(translations=>{
    this.xAxisLabel=translations['stadisticsline.year'];
    

  });
  this.translate.get(['stadisticsline.legend']).subscribe(translations=>{
    this.legendTitle=translations['stadisticsline.legend'];
    

  })
  }

  ngOnInit(): void {
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
