
import { User } from '../user';

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

export class CreateUserRequest {
  id: number;
  nif: any;
  name: string;
  surname1: string;
  surname2: string;
  login: string;
  password: any;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.surname1 = user.surname1;
    this.surname2 = user.surname2;
    this.login = user.login;
    this.password = user.password;
  }
}

//Disponible en el spring 4
export class EditUserRequest extends CreateUserRequest {
  override id: number;

  constructor(user: User) {
    super(user);
    this.id = user.id;
  }
}
