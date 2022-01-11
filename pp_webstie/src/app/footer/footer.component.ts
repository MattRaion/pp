import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  careers = "Careers";
  careersPl = "Kariera";
  careersEn = "Careers"
  
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

  privacyPolicy = "Privacy Policy";
  privacePolicyEn = "Privacy Policy";
  privacyPolicyPl = "Polityka Prywatności";

  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(x)
  {
  if (x === '1') {
    this.games = this.gamesPl;
    this.contact = this.contactPl;
    this.investorPresentation = this.investorPresentationPl;
    this.investorRelation = this.investorRelationPl;
    this.careers = this.careersPl;
    this.privacyPolicy = this.privacyPolicyPl
  }
  else {
    this.games = this.gamesEn;
    this.contact = this.contactEn;
    this.investorPresentation = this.investorPresentationEn;
    this.investorRelation = this.investorRelationEn;
    this.careers = this.careersEn;
    this.privacyPolicy = this.privacePolicyEn;
  }
  }

  ngOnInit() {
  }

}
