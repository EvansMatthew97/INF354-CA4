import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient
  ) { }

  async getUsers(): Promise<User[]> {
    const res = await this.http.get(this.apiUrl).toPromise();
    const numPages = (res as any).total_pages;

    const users: User[] = [];

    await Promise.all(new Array(numPages).fill(undefined).map(async (page, index) => new Promise(async (resolve, reject) => {
      console.log(index)
      const res = await this.http.get(`${this.apiUrl}?page=${index + 1}`).toPromise();
      users.push(...(res as any).data);
      resolve();
    })));

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