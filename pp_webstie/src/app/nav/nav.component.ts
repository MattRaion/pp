import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  games = 'Games';
  gamesEn = 'Games';
  gamesPl = 'Gry';

  contact = 'Contact';
  contactEn = 'Contact';
  contactPl = 'Kontakt';

  investorPresentation = "Investor Presentation";
  investorPresentationEn = "Investor Presentation";
  investorPresentationPl = "Prezentacja Investorska";

  investorRelation = "Investor Relations";
  investorRelationEn = "Investor Relations";
  investorRelationPl = "Relacje Inwestorskie";

  careers = "Careers";
  careersPl = "Kariera";
  careersEn = "Careers"

  constructor(private languageService  : LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
   }

   set(val){
     if (val === '1') {
       this.games = this.gamesPl;
       this.contact = this.contactPl;
       this.investorPresentation = this.investorPresentationPl;
       this.investorRelation = this.investorRelationPl;
       this.careers = this.careersPl;

     }
     else {
       this.games = this.gamesEn;
       this.contact = this.contactEn;
       this.investorPresentation = this.investorPresentationEn;
       this.investorRelation = this.investorRelationEn;
       this.careers = this.careersEn;
     }
   }

  ngOnInit() {
  }

  change(val)
  {
    this.languageService.setIsPolish(val);
    this.languageService.IsPolish.next(val);
  }

}
