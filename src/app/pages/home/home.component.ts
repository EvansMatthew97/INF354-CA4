import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: Array<User> = [];

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.getUsers().then((users: User[]) => {
      this.users = users;
    });
  }

}
