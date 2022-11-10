import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public router: Router,
    private translateService: TranslateService,) { }

  ngOnInit(): void {
  }

}
