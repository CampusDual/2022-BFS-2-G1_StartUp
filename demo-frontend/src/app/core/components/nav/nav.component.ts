import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';
import { LoggerService } from 'src/app/services/logger.service';
import { SidenavService } from 'src/app/services/sidenav.service';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
  allowedRoles?: Array<string>;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  @ViewChild('commandbarSidenav') public sidenav: MatSidenav;
  @Output() toggleSidenav = new EventEmitter<void>();

  sidenavRoutes: ROUTE[] = [
    {
      icon: 'home',
      route: 'main',
      title: 'menu.home',
      allowedRoles: ['CONTACTS'],
    },
    // {
    //   icon: 'people',
    //   route: 'contacts',
    //   title: 'menu.contacts',
    //   allowedRoles: ['CONTACTS']
    // },
    {
      icon: 'people',
      route: 'inversores',
      title: 'menu.investers',
      allowedRoles: ['CONTACTS'],
    },
    // {
    //   icon: 'engineering',
    //   route: 'entrepreneur',
    //   title: 'menu.entrepreneur',
    //   allowedRoles: ['CONTACTS']
    // },
    {
      icon: 'trending_up',
      route: 'stadistics',
      title: 'menu.stadistics',
      allowedRoles: ['CONTACTS'],
    },
  ];

  protected subscription: Subscription;

  selectedLanguage = this.translateService.currentLang;
  userName: string;

  constructor(
    private commandBarSidenavService: SidenavService,
    private authService: AuthService,
    private logger: LoggerService,
    private authGuard: AuthGuard,
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.userName = this.authService.getUserName();
    this.logger.info('NavComponent: ngOnInit()');
    this.commandBarSidenavService.setSidenav(this.sidenav);
  }

  public isAuthenticated() {
    if (
      !this.authService.isLoggedIn() &&
      !(
        this.router.url === '/login' ||
        this.router.url === '/' ||
        this.router.url === '/landing-page'
      )
    ) {
      this.authService.redirectLoginSessionExpiration();
    }
    return this.authService.isLoggedIn();
  }

  public ngOnDestroy() {
    this.logger.info('NavComponent: ngOnDestroy()');
  }

  get allowedRoutes() {
    const allowedRoutes: Array<ROUTE> = [];
    if (this.isAuthenticated()) {
      this.sidenavRoutes.forEach((route) => {
        if (this.authGuard.isAllowed(route.allowedRoles)) {
          allowedRoutes.push(route);
        }
      });
    }
    return allowedRoutes;
  }

  logout() {
    this.authService.logout();
    // Redirect the user
    this.router.navigateByUrl('/login');
    localStorage.setItem('close_session', '1');
    localStorage.setItem(
      'close_session_language',
      this.translateService.currentLang
    );
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  toogleLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translateService.use(lang);
  }
}
