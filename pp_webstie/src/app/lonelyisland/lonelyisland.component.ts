import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lonelyisland',
  templateUrl: './lonelyisland.component.html',
  styleUrls: ['./lonelyisland.component.css']
})
export class LonelyislandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('images-game-det-li');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
