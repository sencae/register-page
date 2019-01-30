import { Injectable } from '@angular/core';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  constructor() { }
  createDb() {const users = [];
    return {users};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 1;
  }
}
