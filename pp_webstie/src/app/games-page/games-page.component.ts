import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {

  motto1 = "Games"
  motto1Pl = "Gry VR przeniosą cię do zupełnie innej rzeczywistości - przenieś się razem z nami!";
  motto1En = "VR games will take you to a completely different reality - go there with us!";


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
