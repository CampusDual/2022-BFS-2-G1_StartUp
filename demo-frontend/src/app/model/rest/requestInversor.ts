import { Contact } from '../contact';
import { Inversor } from '../inversor';

export class QuerySortPaginationRequest {
  query: string;
  pageIndex: number;
  pageSize: number;
  sortDirection: string;
  sortColumn: string;

  constructor(query: string, pageIndex: number, pageSize: number, sortDirection: string, sortColumn: string) {
    this.query = query;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.sortDirection = sortDirection;
    this.sortColumn = sortColumn;
  }
}

export class CreateContactRequest {
  id:number;
  name:string;
  email:string;
  idInvesterRange?: any;
  idBusinessSector?: any;
  idStartUpState?: any;

  constructor(contact: Inversor) {
    this.id = contact.id;
    this.name = contact.name;
    this.email = contact.email;
    this.idInvesterRange = contact.idInvesterRange;
    this.idBusinessSector = contact.idBusinessSector;
    this.idStartUpState = contact.idStartUpState;
  }
}

export class EditContactRequest extends CreateContactRequest {
  override id: number;

  constructor(contact: Inversor) {
    super(contact);
    this.id = contact.id;
  }
}
