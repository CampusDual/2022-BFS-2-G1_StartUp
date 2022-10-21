import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-stadisticsbar',
  templateUrl: './stadisticsbar.component.html',
  styleUrls: ['./stadisticsbar.component.scss']
})
export class StadisticsbarComponent implements OnInit {
  multi: any[];
  view: [number,number] = [1400, 600];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: any;
  showYAxisLabel: boolean = true;
  xAxisLabel:any;
  legendTitle:any;
  junuary:any;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  schemeType: string = 'linear';

  constructor(private translate: TranslateService) {
    Object.assign(this, { multi }); 

    this.translate.get(['stadisticsbar.months']).subscribe(translations=>{
      this.yAxisLabel=translations['stadisticsbar.months'];
      
  
    });
    this.translate.get(['stadisticsbar.inscriptions']).subscribe(translations=>{
      this.xAxisLabel=translations['stadisticsbar.inscriptions'];
      
  
    });
    this.translate.get(['stadisticsbar.legend']).subscribe(translations=>{
      this.legendTitle=translations['stadisticsbar.legend'];
      
  
    });
    this.translate.get(['stadisticsbar.junuary']).subscribe(translations=>{
      this.junuary=translations['stadisticsbar.junuary'];
      
  
    });
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
