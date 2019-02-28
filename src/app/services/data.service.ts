import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  async getUsers(): Promise<User[]> {
    const res = await this.http.get('https://reqres.in/api/users?per_page=12').toPromise();

    const users: User[] = (res as any).data;
    return users.sort((a, b) => {
      const surnameDiff = a.last_name == b.last_name ? 0 : a.last_name > b.last_name ? 1 : -1;
      if (surnameDiff != 0) return surnameDiff;
      return a.first_name > b.first_name ? 1 : -1;
    });
  }

  async getUsersForPage(pageNo: number) {

  }
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}