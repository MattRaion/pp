import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {

  motto1 = "Privacy Policy"
  motto1Pl = "Polityka Prywatności";
  motto1En = "Privacy Policy";


  constructor(private languageService: LanguageService) {


    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x) {
    if (x === '1') {
      this.motto1 = this.motto1Pl;
    }
    else {
      this.motto1 = this.motto1En;
    }
  }

  ngOnInit() {
  }

}