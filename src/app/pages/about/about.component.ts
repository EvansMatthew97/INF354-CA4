import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  h1Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.h1Style = !this.h1Style;
  }

}
