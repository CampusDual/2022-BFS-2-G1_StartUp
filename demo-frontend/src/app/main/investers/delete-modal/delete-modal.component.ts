import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Invester } from 'src/app/model/invester';
import { InvesterService } from 'src/app/services/invester.service'



@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  //title: string | null = null;
  deleteId: any | null = null;

  investers?: Invester[];
  currentInvester: Invester = {};
  currentIndex = 1;
  title: '';



  constructor(public modalRef: MdbModalRef<DeleteModalComponent>, private investerService: InvesterService) { }

  ngOnInit(): void {
     console.log('>>>>oninit delete',this.deleteId);
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
  refreshInvesters(): void {
    this.retrieveInvesters();
    this.currentInvester = {};
    this.currentIndex = -1;
  }
  deleteClose() {
    console.log('>>>>>deleteClose');

  }
  setActiveInvester(invester: Invester, index: number): void {
    this.currentInvester = invester;
    this.currentIndex = index;
  }

  removeInvester(deleteId): void {

    console.log('>>>>>deleteID',deleteId);

    this.investerService.delete(deleteId).subscribe({

next:(res) => {
  console.log('>>>>>response',res);
  this.refreshInvesters();
},
error: (e) => console.error(e)
    });


}


}
