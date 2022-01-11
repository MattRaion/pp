import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datenshi',
  templateUrl: './datenshi.component.html',
  styleUrls: ['./datenshi.component.css']
})
export class DatenshiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById('images-game-det-dat');
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
