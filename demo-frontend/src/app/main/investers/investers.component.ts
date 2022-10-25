import { Component, OnInit } from '@angular/core';
import { InvesterService } from 'src/app/services/invester.service';
import { Invester } from '../../model/invester';

@Component({
  selector: 'app-investers',
  templateUrl: './investers.component.html',
  styleUrls: ['./investers.component.scss']
})
export class InvestersComponent implements OnInit {

  investers?: Invester[];
  currentInvester: Invester = {};
  currentIndex = 1;
  title: '';



  constructor(private investerService: InvesterService) { }



  ngOnInit(): void {
    this.retrieveInvesters();

  }

  retrieveInvesters(): void {
    this.investerService.getInvesters().subscribe({
      next:(data) => {
        this.investers = data;
        console.log(data);

      },
      error: (e) => console.error(e)

    });
  }
  setActiveInvester(invester: Invester, index: number): void {
    this.currentInvester = invester;
    this.currentIndex = index;
  }

  refreshInvesters(): void {
    this.retrieveInvesters();
    this.currentInvester = {};
    this.currentIndex = -1;
  }

  removeInvester(id: any): void {

    console.log(id);

    this.investerService.delete(id).subscribe({

next:(res) => {
  console.log(res);
  this.refreshInvesters();
},
error: (e) => console.error(e)
    });




}






}


