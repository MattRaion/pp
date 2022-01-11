import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.css']
})
export class CareersPageComponent implements OnInit {

  motto = "Szukamy pasjonatów takich, jak my, którzy dołączą do naszych szeregów!";
  mottoPl = "Szukamy pasjonatów takich, jak my, którzy dołączą do naszych szeregów!";
  mottoEn = "We're looking for like minded and passionate people to bolster our ranks!";


  desc = "We are PunkPirates, an independent VR game development studio based in Warsaw. We supervise the production, publication, and marketing of the titles we publish.";
  descPl = "Jesteśmy PunkPirates, niezależnym studiem tworzącym gry VR. Zajmujemy się produkcją, publikacją i marketingiem wydawanych tytułów.";
  descEn = "We are PunkPirates, an independent VR game development studio based in Warsaw. We supervise the production, publication, and marketing of the titles we publish.";

  title1 = "Careers";
  title1En = "Careers";
  title1Pl = "Kariera";

  title2En = "Jobs";
  title2 = "Jobs";
  title2Pl = "Oferty"


  constructor(private languageService: LanguageService) {

    this.set(this.languageService.getIsPolish());

    this.languageService.IsPolish.subscribe(x => {
      this.set(x);
    })
  }

  set(val) {
    if (val === '1') {

      this.motto = this.mottoPl;
      this.desc = this.descPl;
      this.title1 = this.title1Pl;
      this.title2 = this.title2Pl;
    }
    else {
      this.motto = this.mottoEn;
      this.desc = this.descEn;
      this.title1 = this.title1En;
      this.title2 = this.title2En;
    }
  }

  ngOnInit() {
    
  }

}
