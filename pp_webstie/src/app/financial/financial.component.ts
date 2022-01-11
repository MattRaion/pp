import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  active = 0;

  constructor() { }

  ngOnInit() {
  }

  setActive(val)
  {
    if(this.active === val)
    {
      this.active = 0;

    }
      
else{
      this.active = val;
}
   
  }

}
