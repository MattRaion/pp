import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalmeeting',
  templateUrl: './generalmeeting.component.html',
  styleUrls: ['./generalmeeting.component.css']
})
export class GeneralmeetingComponent implements OnInit {


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
