import { Component, OnInit } from '@angular/core';
import { InvesterService } from 'src/app/services/invester.service';
import { Invester } from '../../model/invester';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-investers',
  templateUrl: './investers.component.html',
  styleUrls: ['./investers.component.scss']
})
export class InvestersComponent implements OnInit {

  modalRef: MdbModalRef<DeleteModalComponent> | null = null;

  investers?: Invester[];
  currentInvester: Invester = {};
  currentIndex = 1;
  title: '';



  constructor(private investerService: InvesterService, private modalService: MdbModalService,private route:ActivatedRoute, private router:Router) { }

  openModal(id: number) {

    this.modalRef = this.modalService.open(DeleteModalComponent, {

      data: { title: 'Eliminar',
      deleteId: id

    },

    });

  }
  close():void{
    const closeMessage='Modal closed';
    this.modalRef.close(closeMessage);
  }

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

  removeInvester(id: number): void {

    console.log("ESTE ES EL ID A BORRAR=",id);

    this.investerService.delete(id).subscribe({

next:(res) => {
  console.log("ESTE ES LA RES BORRAR=",res);
  //this.refreshInvesters();
 
  this.router.navigate(['/investers'])
},
error: (e) => console.error(e)
    });




}






}


