import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

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
