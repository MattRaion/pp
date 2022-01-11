import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit {

  motto1 = "Communication is key when it comes to building relationships - connect with us."
  motto1Pl = "Komunikacja jest kluczowa, jeśli chodzi o budowanie relacji - skontaktuj się z nami.";
  motto1En = "Communication is key when it comes to building relationships - connect with us.";


  constructor(private languageService: LanguageService) {
    
    
    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x)
  {
    if(x === '1')
    {
      this.motto1 = this.motto1Pl;
    }
    else{
      this.motto1 = this.motto1En;
    }
  }

  ngOnInit() {
  }

}
