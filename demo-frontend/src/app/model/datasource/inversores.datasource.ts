import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { InversorService } from 'src/app/services/inversor.service';

import { Inversor } from '../inversor';
import { AnyPageFilter } from '../rest/filter';

export class InversoresDataSource extends DataSource<Inversor> {
  contactsSubject = new BehaviorSubject<Inversor[]>([]);
  loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public totalElements: number;

  constructor(private contactService: InversorService) {
    super();
  }

  getContacts(pageFilter: AnyPageFilter) {
    this.contactsSubject.next([]);
    this.loadingSubject.next(true);
    this.contactService.getInversores(pageFilter).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(
      response => {
        this.totalElements = response.totalElements;
        this.contactsSubject.next(response.data);
      }
    );
  }

  connect(): BehaviorSubject<Inversor[]> {
    return this.contactsSubject;
  }

  disconnect(): void {
    this.contactsSubject.complete();
    this.loadingSubject.complete();
  }
}
