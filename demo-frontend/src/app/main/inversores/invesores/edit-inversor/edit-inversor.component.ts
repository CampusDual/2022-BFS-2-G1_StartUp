import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { InversorService } from 'src/app/services/inversor.service';
import { Inversor } from 'src/app/model/inversor';

@Component({
  selector: 'app-edit-inversor',
  templateUrl: './edit-inversor.component.html',
  styleUrls: ['./edit-inversor.component.scss']
})
export class EditInversorComponent implements OnInit {
  idInversor: number;

  inversorForm: FormGroup;
  inversor: Inversor;
  errores: string[];

  constructor(   
    private fb: FormBuilder,
    private inversorService: InversorService,
    private router: Router,
    private route: ActivatedRoute,
    private logger: LoggerService
    ) {
      this.inversor = new Inversor();
     }

  ngOnInit(): void {
    this.createFormGroup();
    this.idInversor = this.route.snapshot.params['id'];
    if (this.idInversor) {
      this.inversorService.getInversor(this.idInversor).subscribe(
        response => {
          this.inversor = response;
          this.inversorForm.patchValue(this.inversor, { emitEvent: false, onlySelf: false });
          this.logger.info(this.inversor);
        }
      );
    }
  }
  onFormChanges() {
    this.inversorForm.valueChanges.subscribe((val) => {});
  }

  createFormGroup() {
    this.inversorForm = this.fb.group({
      id: [this.inversor.id],
      name: [this.inversor.name, Validators.required],
      email: [this.inversor.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      idInvesterRange: [this.inversor.idInvesterRange],
      idBusinessSector: [this.inversor.idBusinessSector],
      idStartUpState: [this.inversor.idStartUpState],
    });
  }

  save() {
    const newInversor: Inversor = Object.assign({}, this.inversorForm.value);
    if (newInversor.id) {
      this.inversorService.editInversor(newInversor).subscribe((response) =>{
        this.redirectList(response);
      });
    } else {
      this.inversorService.createInversor(newInversor).subscribe((response) => {
        this.redirectList(response);
      });
    }
  }

  redirectList(response: any) {
    if (response.responseCode === 'OK') {
      this.router.navigate(['/investers']);
    }else{
      console.log(response);
    }
  }

  compareObjects(o1: any, o2: any): boolean {
    if (o1 && o2) {
      return o1.id === o2.id;
    } else {
      return false;
    }
  }

  cancel() {
    this.router.navigate(['/investers']);
  }
}
