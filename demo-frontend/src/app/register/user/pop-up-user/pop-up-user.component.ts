import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pop-up-user',
  templateUrl: './pop-up-user.component.html',
  styleUrls: ['./pop-up-user.component.scss']
})
export class PopUpUserComponent implements OnInit {



  constructor( private translate: TranslateService,
    private router: Router, private dialogRefUser: MatDialog) { }

    // onAddUser() {
    //   const dialogConfig = new MatDialogConfig();
    //   //dialogConfig.disableClose = true;
    //   dialogConfig.autoFocus = true;
    //   this.dialog.open(, dialogConfig);
    // }

    openDialogUser() {
      this.dialogRefUser.open(PopUpUserComponent)

    }

  ngOnInit(): void {
  }

}
