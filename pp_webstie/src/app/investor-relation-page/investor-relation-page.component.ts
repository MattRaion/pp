import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investor-relation-page',
  templateUrl: './investor-relation-page.component.html',
  styleUrls: ['./investor-relation-page.component.css']
})
export class InvestorRelationPageComponent implements OnInit {

  selection = "Notowania";
  displayDropdown = false;
  constructor() { }


  ngOnInit() {
  }

  dropdown()
  {
    this.displayDropdown = !this.displayDropdown;
  }

  select(value)
  {
    console.log(value);
    this.selection = value;
    this.displayDropdown = false;
  }

}
