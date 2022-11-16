import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PopUpUserComponent } from './pop-up-user/pop-up-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( private translate: TranslateService,
    private router: Router, private dialogRefUser: MatDialog) { }

    // onAddUser() {
    //   const dialogConfig = new MatDialogConfig();
    //   //dialogConfig.disableClose = true;
    //   dialogConfig.autoFocus = true;
    //   this.dialog.open(, dialogConfig);
    // }


  ngOnInit(): void {
  }

}
