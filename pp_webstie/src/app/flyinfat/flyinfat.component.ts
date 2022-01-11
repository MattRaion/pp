import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flyinfat',
  templateUrl: './flyinfat.component.html',
  styleUrls: ['./flyinfat.component.css']
})
export class FlyinfatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('images-game-det-ff');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
