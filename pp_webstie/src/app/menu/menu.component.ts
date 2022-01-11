import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  careers = 'Careers';
  careersPl = 'Kariera';
  careersEn = 'Careers'


  constructor(private location: Location, private languageService: LanguageService) {
    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })

  }

  set(val) {
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

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
