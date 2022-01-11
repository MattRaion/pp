import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendarium',
  templateUrl: './calendarium.component.html',
  styleUrls: ['./calendarium.component.css']
})
export class CalendariumComponent implements OnInit {

  active = 0;

  constructor() { }

  ngOnInit() {
  }

  setActive(val) {
    if (this.active === val) {
      this.active = 0;

    }

    else {
      this.active = val;
    }
  }
}
